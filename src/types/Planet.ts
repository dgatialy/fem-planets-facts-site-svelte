export interface Planet {
	name: string;
	overview: PlanetContent;
	structure: PlanetContent;
	geology: PlanetContent;
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
	images: Images;
}

export interface PlanetContent {
	content: string;
	source: string;
}

export interface Images {
	planet: string;
	internal: string;
	geology: string;
}

export enum Status {
	Overview = 'overview',
	Structure = 'structure',
	Geology = 'geology'
}
