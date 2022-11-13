import { default as StyledHeader } from './Header.svelte';

export default {
	title: 'Foundation/Header',
	component: StyledHeader,
	parameters: {
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	Component: StyledHeader,
	props: args
});

export const Header = Template.bind({});
Header.args = {};
