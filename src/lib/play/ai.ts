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
				content:
					`You are a famous storyteller best known for designing choose your own adventure styles stories. ` +
					`You will create a story with a genre of ${genre} with the length of ${storyLength} chapters one chapter at a time. ` +
					`You do this by putting the stories in JSON format`
			},
			{
				role: 'user',
				content:
					`This is what has happened so far in the story: ${chapters}.` +
					`Generate chapter ${chapterNumber} in 150 words or less and provide 4 potential choices for the user to make.` +
					`If this should be the last chapter, conclude the story and do not provide any choices.`
			}
		],
		response_format: zodResponseFormat(ChapterSchema, 'chapter_schema')
	});

	return completion.choices[0].message.parsed;
};

// Used for testing and style
// export const getChapter = async (genre: string, storyLength: number, chapters: Chapter[]): Promise<Chapter> => {
// 	console.log(storyLength);
// 	console.log(chapters);
// 	const chapter = {
// 		chapterNumber: 1,
// 		title: `Some Title about ${genre}`,
// 		story: "Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor penatibus id donec aenean vitae interdum. Bibendum eleifend euismod viverra felis interdum, sit phasellus elit. Suscipit varius elit habitasse pharetra fermentum ullamcorper nec feugiat nulla. Etiam parturient imperdiet felis commodo morbi vestibulum semper lacinia. Dis venenatis adipiscing aptent magna placerat elit consectetur orci sociosqu. Lectus curabitur netus ullamcorper curabitur ultrices aenean sapien. Mi ultricies ligula cubilia donec penatibus. Venenatis natoque sodales inceptos dictum, quis vitae euismod. Vel in nam diam sollicitudin consectetur metus feugiat. Nisl litora vehicula varius nullam habitasse metus volutpat. Dignissim vitae purus eget fusce maximus hendrerit risus libero. Habitant integer varius primis amet suscipit pulvinar; risus nullam. Eleifend nam quisque vivamus; morbi lacinia luctus. Fames scelerisque taciti venenatis, nisi leo turpis nullam aliquet ut. Enim leo dis, non consectetur tempus nibh quisque. Augue pretium habitant maximus purus, integer laoreet tempus.",
// 		choices: [
// 			"choice1",
// 			"choice2",
// 			"choice3",
// 			"choice4",
// 		]
// 	};

// 	setTimeout(() => (console.log("waiting...")), 3000);

// 	return chapter;
// };
