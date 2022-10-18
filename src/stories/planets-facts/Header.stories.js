import { default as StyledHeader } from './Header.svelte';

export default {
	title: 'Foundation/Header',
	component: StyledHeader,
	parameters: {
		layout: 'fullscreen'
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: StyledHeader,
	props: args
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Header = Template.bind({});
Header.args = {};
