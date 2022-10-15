import { planets } from '../../Store';
import type { Stats } from './../../types/Stats';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Planet } from '../../types/Planet';

export const load: PageLoad = ({ params }) => {
	let planet: Planet | undefined;
	let stats: Stats | undefined;
	planets.subscribe((data) => {
		planet = data.find((p) => p.name === params.slug);
		if (planet) {
			stats = {
				temperature: planet.temperature,
				revolution: planet.revolution,
				radius: planet.radius,
				rotation: planet.rotation
			};
		}

		if (!planet) throw error(404, 'Not found');
	});

	return {
		planet: planet,
		stats: stats
	};
};
