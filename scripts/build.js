const esbuild = require('esbuild');

const result = esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/app.js',
  format: 'cjs',
  platform: 'node',
  target: ['node18'],
  external: [
    'better-sqlite3',
    'mysql',
    'tedious',
    'mysql2',
    'sqlite3',
    'oracledb',
    'pg-native',
    'pg-query-stream',
  ],
  bundle: true,
  minify: true,
  metafile: true,
});

const text = esbuild.analyzeMetafileSync(result.metafile, { verbose: false });

console.log('ANALYZE');
console.log(text);
