import { default as StyledLogo } from './Logo.svelte';

export default {
	title: 'Foundation/Logo',
	component: StyledLogo,
	parameters: {
		layout: 'centered'
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: StyledLogo,
	props: args
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Logo = Template.bind({});
Logo.args = {};
