import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const storyLength = Math.floor(3 + Math.random() * (5 - 3 + 1));

	return { genre: params.genre, storyLength };
};
