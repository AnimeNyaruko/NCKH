export const dynamic = 'force-dynamic';

import { createKysely } from '@vercel/postgres-kysely';
import { NextResponse } from 'next/server';

const db = createKysely<any>();

async function base64toBlob(bs64: string) {
	const result = await fetch(bs64, { cache: 'no-cache' }).then((res) => res.blob());
	return URL.createObjectURL(result);
}

export async function GET() {
	const data = await db.selectFrom('posters').selectAll().execute();
	const result: { title: any; src: string }[] = [];
	await new Promise((resolve) => {
		data.forEach(async (e, i, arr) => {
			result.push({
				title: e.title,
				src: await base64toBlob(e.src),
			});
			if (i == arr.length - 1) {
				resolve('done');
			}
		});
	});
	return NextResponse.json(data);
}
