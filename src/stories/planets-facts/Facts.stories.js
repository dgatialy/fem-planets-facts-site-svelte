import { default as StyledFacts } from './Facts.svelte';

export default {
	title: 'Foundation/Facts',
	component: StyledFacts,
	parameters: {
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	Component: StyledFacts,
	props: args
});

export const Facts = Template.bind({});
Facts.args = {
	facts: [
		{
			term: 'Rotation Time',
			definition: '9.93 hours'
		},
		{
			term: 'Revolution Time',
			definition: '11.86 years'
		},
		{
			term: 'Radius',
			definition: '69,911 km'
		},
		{
			term: 'Average Temp.',
			definition: '-108°c'
		}
	]
};
