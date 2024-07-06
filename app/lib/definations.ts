export type BookLink = {
	Author: 'CD' | 'KNTT' | 'CTST' | string;
	Subject: 'Math' | 'Physic' | 'Chemical' | string;
	Grade: 10 | 11 | 12 | number;
	isAnswer?: boolean;
	isExercise?: boolean;
	url?: string;
};

export const ColorCode = {
	baseColor: '#3A86FF',
	baseColorHover: '#024bbf',
};
