'use server';

import { NextRequest, NextResponse } from 'next/server';
import { userAgent } from 'next/server';

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const ChildPath = path.split('/');

	const { device } = userAgent(req);

	console.log(device.type);

	if (device.type == 'desktop' && ChildPath[1] !== 'p')
		return NextResponse.redirect(new URL('/p', req.url));
	if (device.type != 'desktop' && ChildPath[1] !== 'm')
		return NextResponse.redirect(new URL('/m', req.url));

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icon.*|seed).*)'],
};
