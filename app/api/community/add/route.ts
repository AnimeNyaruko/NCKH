import { NextRequest, NextResponse } from 'next/server';
import { createKysely } from '@vercel/postgres-kysely';
import { revalidatePath } from 'next/cache';

const db = createKysely<any>();

export async function POST(req: NextRequest) {
	const data: { title: string; src: string; width: number; height: number } = await req.json();

	const checker = await db
		.selectFrom('posters')
		.select('title')
		.where('title', '=', data.title)
		.executeTakeFirst();
	if (checker?.title) {
		return NextResponse.json({
			status: 'fail',
			message: 'Tiêu đề đã tồn tại!',
		});
	}

	await db
		.insertInto('posters')
		.values({
			title: data.title,
			src: data.src,
			w: data.width,
			h: data.height,
		})
		.executeTakeFirst();

	revalidatePath('community');
	return NextResponse.json({
		status: 'success',
	});
}
