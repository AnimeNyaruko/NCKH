export type BookLink = {
	Author: 'CD' | 'KNTT' | 'CTST' | string;
	Subject: 'Math' | 'Physic' | 'Chemical' | string;
	Grade: 10 | 11 | 12 | number;
	url?: string;
};
