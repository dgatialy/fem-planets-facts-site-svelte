import { default as StyledButton } from './Button.svelte';

export default {
	title: 'Foundation/Button',
	component: StyledButton,
	parameters: {
		layout: 'centered'
	},
	argTypes: {
		selected: { control: 'boolean' },
		variant: { control: 'inline-radio', options: ['default', 'compact'] }
	}
};

const Template = (args) => ({
	Component: StyledButton,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	selected: false,
	name: 'Structure',
	variant: 'default'
};

export const Compact = Template.bind({});
Compact.args = {
	selected: false,
	name: 'Structure',
	variant: 'compact'
};
