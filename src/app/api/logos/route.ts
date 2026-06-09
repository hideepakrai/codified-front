import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const logosDirectory = path.join(process.cwd(), 'public', 'logos');
    
    // Ensure the directory exists
    if (!fs.existsSync(logosDirectory)) {
      return NextResponse.json({ images: [] });
    }

    const fileNames = await fs.promises.readdir(logosDirectory);
    
    // Filter out non-image files (like hidden files, e.g., .DS_Store)
    const images = fileNames
      .filter((file) => /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(file))
      .map((file) => `/logos/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error reading logos directory:", error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}
