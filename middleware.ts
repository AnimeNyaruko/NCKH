'use server';

import { NextRequest, NextResponse } from 'next/server';
import { userAgent } from 'next/server';

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const ChildPath = path.split('/');

	const remainPath = path.split('/').reduce((prev, cur, i, arr) => {
		if (i > 1) {
			return prev + '/' + cur;
		}
		return prev;
	}, '');
	const { device } = userAgent(req);

	if (device.type != 'mobile' && ChildPath[1] !== 'p')
		return NextResponse.redirect(new URL(`/p${remainPath}`, req.url));
	if (device.type == 'mobile' && ChildPath[1] !== 'm')
		return NextResponse.redirect(new URL(`/m${remainPath}`, req.url));

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icon.*|seed).*)'],
};
