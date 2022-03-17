import adapter from '@sveltejs/adapter-netlify'
import svg from '@poppanator/sveltekit-svg'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [svg()],
      server: {
        fs: {
          allow: ['studio']
        }
      }
    }
  }
}

export default config
