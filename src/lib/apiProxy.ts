import { NextRequest, NextResponse } from "next/server";

const FASTAPI_URL = process.env.FASTAPI_URL || "http://127.0.0.1:8000";
const TENANT_DB_NAME = process.env.TENANT_DB_NAME;

export async function proxyRequest(
  req: NextRequest, 
  targetPath: string,
  options: { addApiPrefix?: boolean } = {}
) {
  const searchParams = req.nextUrl.searchParams.toString();
  const baseBackendUrl = options.addApiPrefix ? `${FASTAPI_URL}/api` : FASTAPI_URL;
  const url = `${baseBackendUrl}/${targetPath}${searchParams ? `?${searchParams}` : ""}`;
  
  const headers = new Headers();
  
  // Forward relevant headers
  const headersToForward = [
    "authorization", 
    "cookie", 
    "content-type", 
    "x-tenant-db", 
    "accept",
    "tenant-slug",
    "tenant_slug",
    "auth-token"
  ];

  headersToForward.forEach(headerName => {
    const value = req.headers.get(headerName);
    if (value) {
      headers.set(headerName, value);
    }
  });

  // Fallback to .env if x-tenant-db not already set by frontend
  if (TENANT_DB_NAME && !headers.has("x-tenant-db")) {
    headers.set("x-tenant-db", TENANT_DB_NAME);
  }

  const fetchOptions: RequestInit = {
    method: req.method,
    headers: headers,
  };

  if (["POST", "PUT", "PATCH"].includes(req.method)) {
    try {
      const contentType = req.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        const body = await req.json();
        fetchOptions.body = JSON.stringify(body);
      } else {
        fetchOptions.body = await req.blob();
      }
    } catch (e) {
      // No body or error parsing
    }
  }

  try {
    console.log(`[Proxy] ${req.method} ${req.nextUrl.pathname} -> ${url}`);
    const response = await fetch(url, fetchOptions);
    
    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    } else {
      const text = await response.text();
      return new NextResponse(text, { 
        status: response.status,
        headers: { "Content-Type": contentType || "text/plain" }
      });
    }
  } catch (error) {
    console.error(`[Proxy Error] ${url}:`, error);
    return NextResponse.json(
      { success: false, error: "Failed to connect to backend service" }, 
      { status: 500 }
    );
  }
}
