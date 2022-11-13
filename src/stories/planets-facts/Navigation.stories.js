import { default as StyledNavigation } from './Navigation.svelte';

export default {
	title: 'Foundation/Navigation',
	component: StyledNavigation
};

const Template = (args) => ({
	Component: StyledNavigation,
	props: args
});

export const Navigation = Template.bind({});
Navigation.args = {};
