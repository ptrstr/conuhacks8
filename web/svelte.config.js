import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 kit: {
  adapter: adapter(),
  csrf: {
    checkOrigin: false
  }
 },
 preprocess: vitePreprocess(),
 vitePlugin: {
   inspector: {
    holdMode: true
  }
 }
};

export default config;