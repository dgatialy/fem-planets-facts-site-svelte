import { default as StyledNavigation } from './Navigation.svelte';

export default {
	title: 'Foundation/Navigation',
	component: StyledNavigation
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: StyledNavigation,
	props: args
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Navigation = Template.bind({});
Navigation.args = {};
