/**
 * NOTE: only execute this if you don't have Deno installed,
 *       otherwise use the `.ts` file
 */

/* global require */
const { copyFile, readFile, writeFile } = require('fs');
const glob = require('glob');
const { replaceImports } = require('./replace-imports');

// replace imports in JavaScript files so that they're browser compatible
glob('./public/dist/**/*.js', function (err, files) {
  if (err) throw err;

  files.forEach((file) => {
    readFile(file, 'utf8', (err, text) => {
      if (err) throw err;

      writeFile(file, replaceImports(text), () => {});
    });
  });
});

// copy other relevant files
copyFile('packages/shell/index.css', 'public/dist/index.css', onErrThrow);

function onErrThrow(err) {
  if (err) throw err;
}
