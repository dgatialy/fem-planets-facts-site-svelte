import { planets } from '../../Store';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Planet } from '../../types/Planet';

export const load: PageLoad = ({ params }) => {
	let planet: Planet | undefined;

	planets.subscribe((data) => {
		planet = data.find((p) => p.name === params.slug);
		
		if (!planet) throw error(404, 'Not found');
	});

	return {
		planet: planet
	};
};
