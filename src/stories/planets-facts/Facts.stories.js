import { default as StyledFacts } from './Facts.svelte';

export default {
	title: 'Foundation/Facts',
	component: StyledFacts,
	parameters: {
		layout: 'fullscreen'
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: StyledFacts,
	props: args
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
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
