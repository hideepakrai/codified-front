import { proxyRequest } from "@/lib/apiProxy";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest, context: { params: Promise<{ slug?: string[] }> }) {
  return handleProxy(req, context);
}

export async function POST(req: NextRequest, context: { params: Promise<{ slug?: string[] }> }) {
  return handleProxy(req, context);
}

export async function PUT(req: NextRequest, context: { params: Promise<{ slug?: string[] }> }) {
  return handleProxy(req, context);
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ slug?: string[] }> }) {
  return handleProxy(req, context);
}

async function handleProxy(req: NextRequest, context: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await context.params;
  
  if (!slug || slug.length === 0) {
    return NextResponse.json({ error: "Invalid API endpoint" }, { status: 404 });
  }

  const base = slug[0];
  const rest = slug.slice(1).join("/");
  
  // Mapping logic
  let targetPath = slug.join("/");
  let addApiPrefix = false;

  if (base === "commerce") {
    targetPath = "commerce/" + rest;
  } else if (base === "form-data") {
    targetPath = "form-data";
  }

  return proxyRequest(req, targetPath, { addApiPrefix });
}
