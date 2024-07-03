import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { findUserById, getCurrentUser, hasAccess } from '@/libs/UserService';

const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const currentUser = await getCurrentUser();
  const idUser = await findUserById(formData.get('userId') as string);
  if(isNaN(Number(formData.get('pos')))) {
    return new Response('Invalid pos', {
      status: 400,
    })
  }
  const pos = Number(formData.get('pos'));
  
  if (!hasAccess(currentUser, idUser, "USER") || !idUser) {
    return new Response('Hello, Next.js!', {
      status: 401,
    })
  }
  
  const file = formData.get('file') as File;
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Certifique-se de que o diretório existe
  const dir = path.join(process.cwd(), 'public', 'uploads');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, buffer);
  const images = [...idUser.images ? idUser.images : []]
  images[pos] = `/uploads/${fileName}`;
  idUser.images = images;
  idUser.save();
  return NextResponse.json({ url: images[pos] }, { status: 200 });
}
  

export {POST}