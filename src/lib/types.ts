export type Choice = {
	text: string;
	next: number;
};

export type Chapter = {
	id: number;
	title: string;
	story: string;
	choices: Choice[];
};

export type Chapters = {
	chapters: Chapter[];
};
