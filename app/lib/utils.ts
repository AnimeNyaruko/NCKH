import { BookLink } from './definations';
import { BookLinkData } from './data';

type findLink = Required<Omit<BookLink, 'url'>>;
export default function findBookLink(bLinks: findLink) {
	let grade: number;
	let subject: number;
	let author: number;

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

	return BookLinkData[grade][subject][author][bLinks.isAnswer ? 1 : 0][bLinks.isExercise ? 1 : 0];
}
