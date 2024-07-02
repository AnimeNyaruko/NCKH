'use server';

import { sql } from '@vercel/postgres';
import { BookLink } from './definations';

export default async function fetchBookLinks(data: BookLink) {
	const { Grade, Subject, Author } = data;

	const { rows } = await sql<BookLink>`SELECT * FROM booklinks WHERE 
                        Grade = ${Grade} AND
                        Subject = ${Subject} AND
                        Author = ${Author}`;
	return rows;
}
