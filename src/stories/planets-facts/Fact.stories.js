import { default as StyledFact } from './Fact.svelte';


export default {
	title: 'Foundation/Fact',
	component: StyledFact,
	parameters: {
		layout: 'fullscreen'
	},
	//argTypes: { variant: { control: 'inline-radio', options: ['column', 'row', undefined] }}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: StyledFact,
	props: args
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Fact = Template.bind({});
Fact.args = {
	data: {
		term: 'Rotation Time',
		definition: '10.8 hours'
	}
}

