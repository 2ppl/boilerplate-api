const esbuild = require('esbuild');

const result = esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/app.js',
  format: 'cjs',
  platform: 'node',
  target: ['node18'],
  bundle: true,
  minify: true,
  metafile: true,
});

const text = esbuild.analyzeMetafileSync(result.metafile, { verbose: false });

console.log('ANALYZE');
console.log(text);
