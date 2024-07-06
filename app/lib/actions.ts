'use server';

import { sql } from '@vercel/postgres';
import { BookLink } from './definations';

export async function fetchBookLinks(data: BookLink) {
	const { Grade, Subject, Author } = data;
	const { rows } = await sql<BookLink>`SELECT * FROM booklinks WHERE 
                        Grade = ${Grade} AND
                        Subject = ${Subject} AND
                        Author = ${Author}`;
	return rows;
}

export async function fetchAllAuthorLinks(data: Omit<BookLink, 'Author'>) {
	const { Grade, Subject } = data;
	const CD = (await fetchBookLinks({ ...data, Author: 'CD' })).map((e) => {
		return e.url;
	}) as Array<string>;
	const KNTT = (await fetchBookLinks({ ...data, Author: 'KNTT' })).map((e) => {
		return e.url;
	}) as Array<string>;
	const CTST = (await fetchBookLinks({ ...data, Author: 'CTST' })).map((e) => {
		return e.url;
	}) as Array<string>;

	const LinksArray = [[...CD], [...KNTT], [...CTST]];
	return LinksArray;
}
