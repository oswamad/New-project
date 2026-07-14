import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		// Change this to your GitHub repo name if deploying as a project page
		// e.g. paths: { base: '/my-repo' }
		paths: {
			base: '/Bio-Chloe'
		}
	}
};

export default config;
