import { BookLink } from './definations';
import { sql } from '@vercel/postgres';

type findLink = Required<Omit<BookLink, 'url'>>;
export default async function findBookLink(bLinks: findLink): Promise<BookLink> {
	let grade: number;
	let subject: number;
	let author: number;
	let isAnswer: boolean = bLinks.isAnswer;
	let isExercise: boolean = bLinks.isExercise;

	switch (bLinks.Grade) {
		case 10:
			grade = 0;
			break;
		case 11:
			grade = 1;
			break;
		default:
			grade = 2;
			break;
	}

	switch (bLinks.Subject) {
		case 'Math':
			subject = 0;
			break;
		case 'Physic':
			subject = 1;
			break;
		default:
			subject = 2;
			break;
	}

	switch (bLinks.Author) {
		case 'CD':
			author = 0;
			break;
		case 'CTST':
			author = 1;
			break;
		default:
			author = 2;
			break;
	}

	const { rows } = await sql<BookLink>`SELECT * FROM booklinks WHERE 
                        Grade = ${grade} AND
                        Subject = ${subject} AND
                        Author = ${author} AND
						isAnswer = ${isAnswer} AND
						isExercise = ${isExercise}`;
	return rows[0];
}
