import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    console.log(process.env.API_KEY)
    return NextResponse.next()
}

export const config = {
    matcher: '/',
}