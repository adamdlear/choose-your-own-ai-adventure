import { OPENAI_API_KEY } from '$env/static/private';
import { getChapters } from '$lib/db';
import OpenAI from 'openai';
import { zodResponseFormat } from 'openai/helpers/zod';
import { z } from 'zod';

const ChapterSchema = z.object({
	chapterNumber: z.number(),
	title: z.string(),
	story: z.string(),
	choices: z.string().array()
});

export const getChapter = async (genre: string) => {
	const messages = getStoryHistory();
	return messages;
};

const getStoryHistory = async () => {
	const chapters = await getChapters();
	return chapters;
};
