/**
 * NOTE: execute this if you have Deno installed,
 *       otherwise use the `.js` file with Node
 */

import { copy, expandGlob } from 'https://deno.land/std/fs/mod.ts';
import { replaceImports } from './replace-imports.ts';

// replace imports in JavaScript files so that they're browser compatible
for await (const { path } of expandGlob('./public/dist/**/*.js')) {
  const text = await Deno.readTextFile(path);
  await Deno.writeTextFile(path, replaceImports(text));
}

// copy other relevant files
copy('packages/shell/index.css', 'public/dist/index.css');
