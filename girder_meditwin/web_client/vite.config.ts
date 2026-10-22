import { resolve } from 'path';

import { defineConfig } from 'vite';
import { compileClient } from 'pug';

function pugPlugin() {
  return {
    name: 'pug',
    transform(src: string, id: string) {
      if (id.endsWith('.pug')) {
        return {
          code: `${compileClient(src, { filename: id })}\nexport default template`,
          map: null,
        };
      }
    },
  };
}

// daikon only wires up its submodules when `typeof require !== 'undefined'` at runtime,
// which is false in the browser bundle even though the bundler has resolved every require().
function daikonRequirePlugin() {
  return {
    name: 'daikon-require',
    transform(src: string, id: string) {
      if (/node_modules[\\/]daikon[\\/]/.test(id)) {
        return {
          code: src.replace(/typeof require !== ['"]undefined['"]/g, 'true'),
          map: null,
        };
      }
    },
  };
}

export default defineConfig({
  plugins: [pugPlugin(), daikonRequirePlugin()],
  publicDir: 'static',
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'main.js'),
      name: 'GirderPluginMeditwin',
      fileName: 'girder-plugin-meditwin',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'style.css';
          }
          return '[name][extname]';
        },
      },
    },
  },
});
