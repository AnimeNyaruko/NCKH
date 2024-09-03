'use server';

import { sql } from '@vercel/postgres';
import { BookLink } from './definations';

import { createKysely } from '@vercel/postgres-kysely';

export async function fetchBookLinks(data: BookLink) {
	const { Grade, Subject, Author } = data;
	const { rows } = await sql<BookLink>`SELECT * FROM booklinks WHERE 
                        Grade = ${Grade} AND
                        Subject = ${Subject} AND
                        Author = ${Author}
						ORDER BY isexercise, isanswer`;
	return rows;
}

export async function fetchAllAuthorLinks(data: Omit<BookLink, 'url' | 'Author'>) {
	const { Grade, Subject } = data;
	const CD = (await fetchBookLinks({ ...data, Author: 'CD' })).map((e) => e.url) as Array<string>;
	const KNTT = (await fetchBookLinks({ ...data, Author: 'KNTT' })).map(
		(e) => e.url
	) as Array<string>;
	const CTST = (await fetchBookLinks({ ...data, Author: 'CTST' })).map(
		(e) => e.url
	) as Array<string>;

	const LinksArray = [[...CD], [...KNTT], [...CTST]];
	return LinksArray;
}
