import { build } from 'esbuild';
import { copyFileSync } from 'fs-extra';

build({
  entryPoints: ['./repl/formatter.ts'],
  outdir: './dist',
  minify: true,
  bundle: true,
  external: ['/Gordita-Medium.woff', '/Gordita-Regular.woff', '/Gordita-Bold.woff'],
  define: {
    'process.env.BABEL_TYPES_8_BREAKING': 'true',
    'process.env.NODE_DEBUG': 'false',
    'preventAssignment': 'true',
  },
}).then(() => {
  copyFileSync('./src/types.d.ts', './dist/types.d.ts');
});
