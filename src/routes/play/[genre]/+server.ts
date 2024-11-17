import { json } from '@sveltejs/kit';
import type { Chapter } from '$lib/types';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
    const { chapters } = await request.json();
    
    console.log(chapters);

	const chapter: Chapter = {
		chapterNumber: 1,
		title: 'Some Title',
		story: 'my story content',
        choices: [
            "choice1",
            "choice2",
            "choice3",
            "choice4",
        ]
	};

	return json({ chapter });
};
