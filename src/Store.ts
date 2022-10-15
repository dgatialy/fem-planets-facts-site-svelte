import { writable, readable } from 'svelte/store';
import data from './data.json';
import type { Planet } from './types/Planet';

const allPlanets: Planet[] = data.map((d) => {
	return {
		name: d.name,
		overview: {
			content: d.overview.content,
			source: d.overview.source
		},
		structure: {
			content: d.structure.content,
			source: d.structure.source
		},
		geology: {
			content: d.geology.content,
			source: d.geology.source
		},
		rotation: d.rotation,
		revolution: d.revolution,
		radius: d.radius,
		temperature: d.temperature,
		images: {
			planet: d.images.planet,
			internal: d.images.internal,
			geology: d.images.geology
		}
	};
});

export const planets = readable(allPlanets, (set) => {
	set(allPlanets);
	return () => {};
});

const PlanetsStore = writable(allPlanets);
export default PlanetsStore;
