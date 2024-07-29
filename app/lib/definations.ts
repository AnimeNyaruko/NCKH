export type BookLink = {
	Author: 'CD' | 'KNTT' | 'CTST';
	Subject: 'Math' | 'Physic' | 'Chemical';
	Grade: 10 | 11 | 12;
	isAnswer?: boolean;
	isExercise?: boolean;
	url?: string;
};

export const ColorCode = {
	baseColor: '#3A86FF',
	baseColorHover: '#024bbf',
};
