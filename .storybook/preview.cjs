import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../static/style/main.css';

const customViewports = {
	desktop: {
		name: 'Desktop',
		styles: {
			width: '1440px',
			height: '1024px'
		}
	},
	mbp16: {
		name: 'MacBook Pro 16"',
		styles: {
			width: '1728px',
			height: '1117px'
		}
	},
	iphone13mini: {
		name: 'iPhone 13 mini',
		styles: {
			width: '375px',
			height: '812px'
		}
	},
	iphone13mini: {
		name: 'iPhone 13 mini',
		styles: {
			width: '375px',
			height: '812px'
		}
	}
};

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	viewport: {
		viewports: {
			...MINIMAL_VIEWPORTS,
			...customViewports
		}
	}
};
