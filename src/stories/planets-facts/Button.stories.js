import { default as StyledButton } from './Button.svelte';


export default {
	title: 'Foundation/Button',
	component: StyledButton,
	parameters: {
		layout: 'centered'
	},
	argTypes: { selected: { control: 'boolean'}, variant: { control: 'inline-radio', options: ['default', 'compact'] }}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: StyledButton,
	props: args
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Default = Template.bind({});
Default.args = {
	selected: false,    
    name: 'Structure',
    variant: 'default'
}

export const Compact = Template.bind({});
Compact.args = {
	selected: false,    
    name: 'Structure',
    variant: 'compact'
}



