const { spawn } = require('node:child_process');

let server = null;

require('esbuild').build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/app.js',
  format: 'cjs',
  platform: 'node',
  target: ['node18'],
  external: [
    './node_modules/*',
  ],
  watch: {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error);
      else console.log('watch build succeeded:', result);

      if (server) server.kill('SIGINT');
      server = spawn('node', ['dist/app.js'], { stdio: 'inherit' });
    },
  },
  bundle: true,
}).then((result) => {
  console.log('watching...');
  console.log('watching result:', result);

  if (server) server.kill('SIGINT');
  server = spawn('node', ['dist/app.js'], { stdio: 'inherit' });
});
