'use server';

import { NextRequest, NextResponse } from 'next/server';
import { isMobile } from 'react-device-detect';

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const ChildPath = path.split('/');

	if (!isMobile && ChildPath[1] !== 'p') return NextResponse.redirect(new URL('/p', req.url));
	if (isMobile && ChildPath[1] !== 'm') return NextResponse.redirect(new URL('/m', req.url));

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icon.*|seed).*)'],
};
