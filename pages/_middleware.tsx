import axios from "axios";
import { NextResponse, NextRequest, NextFetchEvent } from "next/server";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const { pathname, origin } = req.nextUrl;

  if (pathname === "/") {
    // 서버 사이드 리다이렉트
    // 클라이언트는 /로 접근하는 것이나 /home로 접근하는 것이나
    // 동일한 것으로 보임
    return NextResponse.rewrite(`${origin}/home`);
  }
  return NextResponse.next();
}
