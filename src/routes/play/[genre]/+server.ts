import { getChapter } from '$lib/play/ai';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { genre, storyLength, chapters } = await request.json();

	try {
		const chapter = await getChapter(genre, storyLength, chapters);
		return json({ chapter }, { status: 200 });
	} catch (error) {
		console.error('error fetching chapter:', error);
		return json({ chapter: null }, { status: 500 });
	}
};
