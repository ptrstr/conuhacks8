import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 kit: {
  adapter: adapter()
 },

 vitePlugin: {
  experimental: {
   inspector: {
    holdMode: true
   }
  }
 }
};

export default config;