import OpenAI from 'openai';
import { zodResponseFormat } from 'openai/helpers/zod';
import { z } from 'zod';

// type Choice = {
//     text: string;
//     next: number;
// }

// type Chapters = {
//     id: number;
//     chapter: string;
//     story: string;
//     choices: Choice[];
// }

const ChoiceSchema = z.object({
	text: z.string(),
	next: z.number()
});

const ChapterSchema = z.object({
	id: z.number(),
	chapter: z.string(),
	story: z.string(),
	choices: z.array(ChoiceSchema)
});

const ChaptersSchema = z.array(ChapterSchema);

const openai = new OpenAI();

const systemRole =
	'You are a famous storyteller best known for designing choose your own adventure styles stories. You do this by putting the stories in JSON format';

export async function getStory(genre: string) {
	const completion = await openai.chat.completions.create({
		model: 'gpt-4o-mini',
		messages: [
			{ role: 'system', content: systemRole },
			{
				role: 'user',
				content: `Create a choose your own adventure story about ${genre} 15 chapters where a reader encounters at least 8.`
			}
		],
		response_format: zodResponseFormat(ChaptersSchema, 'chapter_response')
	});

	return completion.choices[0].message;
}
