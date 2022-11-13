import { default as StyledLogo } from './Logo.svelte';

export default {
	title: 'Foundation/Logo',
	component: StyledLogo,
	parameters: {
		layout: 'centered'
	}
};

const Template = (args) => ({
	Component: StyledLogo,
	props: args
});

export const Logo = Template.bind({});
Logo.args = {};
