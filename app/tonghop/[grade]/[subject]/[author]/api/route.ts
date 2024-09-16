import { NextRequest, NextResponse } from 'next/server';
import { createKysely } from '@vercel/postgres-kysely';

const db = createKysely<any>();

function MakeTitle(grade: number, subject: string, author: string, isexercise: boolean) {
	const BookType = isexercise ? 'SBT' : 'SGK';
	const Grade = grade == 10 ? 'Lớp 10' : grade == 11 ? 'Lớp 11' : 'Lớp 12';
	const Subject = subject == 'Math' ? 'Môn Toán' : subject == 'Physic' ? 'Môn Vật lí' : 'Môn Hoá';
	const Author =
		author == 'CD' ? 'Cánh diều' : author == 'KNTT' ? 'Kết nối tri thức' : 'Chân trời sáng tạo';

	return `${BookType} ${Grade} ${Subject} ${Author}`;
}

export async function GET(
	req: NextRequest,
	{ params }: { params: { grade: number; subject: string; author: string } }
) {
	const searchParams = req.nextUrl.searchParams;

	let { grade, subject, author } = params;

	subject = subject[0].toUpperCase() + subject.substring(1);
	author = author.toUpperCase();

	const exercise = searchParams.get('exercise') ? true : false;

	let data = await db
		.selectFrom('booklinkshorten')
		.select('url')
		.where((eb) =>
			eb.and([
				eb('grade', '=', grade),
				eb('subject', '=', subject),
				eb('author', '=', author),
				eb('isexercise', '=', exercise),
			])
		)
		.orderBy('part')
		.execute();

	data = data.map((e) => {
		return {
			url: e.url,
			title:
				e.url != '#'
					? MakeTitle(grade, subject, author, exercise)
					: 'Chúng tôi xin lỗi vì hiện chưa có link!',
		};
	});

	return NextResponse.json(data);
}
