import { default as StyledGallery } from './Gallery.svelte';
import { Status } from '../../types/Planet';

export default {
	title: 'Foundation/Gallery',
	component: StyledGallery,
	parameters: {
		layout: 'centered',
		argTypes: {
			current: {
				control: 'inline-radio',
				options: [Status.Overview, Status.Geology, Status.Structure]
			}
		}
	}
};

const Template = (args) => ({
	Component: StyledGallery,
	props: args
});

export const Gallery = Template.bind({});
Gallery.args = {
	images: {
		planet: 'static/assets/planet-mercury.svg',
		internal: 'static/assets/planet-mercury-internal.svg',
		geology: 'static/assets/geology-mercury.png'
	},
	current: Status.Structure
};
