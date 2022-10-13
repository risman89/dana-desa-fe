import  { NextRequest } from 'next/server';
import  { NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt"
export default async function middleware(req){
    const path = req.nextUrl.pathname;
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    // console.log(session);
    // 
    if(path.startsWith('/admin')){
        return NextResponse.redirect(new URL('/login', req.url))
    }
}