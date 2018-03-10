const fs = require('fs');
const execSync = require('child_process').execSync;
const prettyBytes = require('pretty-bytes');
const gzipSize = require('gzip-size');

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv),
  });

console.log('Building CommonJS modules ...');

exec('babel src -d . --ignore *.test.js', {
  BABEL_ENV: 'cjs',
});

console.log('\nBuilding ES modules ...');

exec('babel src -d es --ignore *.test.js', {
  BABEL_ENV: 'es',
});

console.log('\nBuilding UMD ...');

exec('rollup -c -f umd -o umd/reactions-component.js', {
  BABEL_ENV: 'umd',
  NODE_ENV: 'development',
});

console.log('\nBuilding UMD min.js ...');

exec('rollup -c -f umd -o umd/reactions-component.min.js', {
  BABEL_ENV: 'umd',
  NODE_ENV: 'production',
});

console.log('\nPlacing TypeScript definitions ...');

exec('cp src/index.d.ts .')
exec('cp src/index.d.ts es')

const size = gzipSize.sync(fs.readFileSync('umd/reactions-component.min.js'));

console.log('\ngzipped, the UMD build is %s', prettyBytes(size));
