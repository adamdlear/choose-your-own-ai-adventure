import { OPENAI_API_KEY } from '$env/static/private';
import type { Chapter } from '$lib/types';
import OpenAI from 'openai';
import { zodResponseFormat } from 'openai/helpers/zod';
import { z } from 'zod';

const ChapterSchema = z.object({
	chapterNumber: z.number(),
	title: z.string(),
	story: z.string(),
	choices: z.array(z.string())
});

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

export const getChapter = async (genre: string, storyLength: number, chapters: Chapter[]) => {
	const chapterNumber = chapters.length + 1;
	

	const completion = await openai.beta.chat.completions.parse({
		model: 'gpt-4o-mini',
		messages: [
			{
				role: 'system',
				content: `You are a famous storyteller best known for designing choose your own adventure styles stories. `
						+ `You will create a story with a genre of ${genre} with the length of ${storyLength} chapters one chapter at a time. `
						+ `You do this by putting the stories in JSON format`
			},
			{
				role: 'user',
				content: `This is what has happened so far in the story: ${chapters}.`
						+ `Generate chapter ${chapterNumber}.`
						+ `If this should be the last chapter, conclude the story and do not provide any choices.`
			}
		],
		response_format: zodResponseFormat(ChapterSchema, 'chapter_schema')
	});

	return completion.choices[0].message.parsed;
};

// Used for testing and style
// export const getChapter = async (genre: string, storyLength: number, chapters: Chapter[]): Promise<Chapter> => {
// 	const chapter = {
// 		chapterNumber: 1,
// 		title: `Some Title about ${genre}`,
// 		story: 'my story content',
// 		choices: [
// 			"choice1",
// 			"choice2",
// 			"choice3",
// 			"choice4",
// 		]
// 	};
// 	return chapter;
// };
