import { getStory } from '$lib/play/ai';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log("fetching story...")

	try {
		const chapters = await getStory(params.genre);
		return { chapters: chapters }
	} catch (error) {
		console.error(error);
		return null;
	}
};
