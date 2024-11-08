import { getStory } from '$lib/play/ai';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log("fetching story...")

	try {
		const response = await getStory(params.genre);
		return { chapters: response?.chapters }
	} catch (error) {
		console.error(error);
		return { chapters: null };
	}
};
