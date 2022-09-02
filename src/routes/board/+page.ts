import type { PageLoad } from './$types';

// Fetch Function
export const load: PageLoad = async ({ fetch }) => {
	const url = `https://6016e904f534300017a4509d.mockapi.io/board?page=1&limit=40`;
	return {
		entries: await fetch(url).then((r) => r.json())
	};
};