import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'swagger.yaml');
    const fileContents = await fs.readFile(filePath, 'utf8');
    
    return new NextResponse(fileContents, {
      headers: {
        'Content-Type': 'text/yaml',
      },
    });
  } catch (error) {
    return new NextResponse('Swagger documentation not found', { status: 404 });
  }
} 