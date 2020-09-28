/**
 * Replaces imports in @text so that they're browser compatible.
 * @param text Text to replace imports in.
 */
export function replaceImports(text: string) {
  return (
    text
      // remove `// PROD: ` comments to enable prod-only lines
      .replace(/\/\/ PROD: /g, '')
      .replace(
        /(import(?:\(| .*))['"](.+)['"]/g,
        (t, statement: string, path: string) => {
          // already valid browser import
          if (/^https?:\/\//.test(path)) return t;

          // TODO: remove when Vue3 is default in CDNs
          path = path.replace(/^vue$/, 'vue@^3.0.0');

          // missing index on local @mfe module
          if (/^@mfe\/[^/]+$/.test(path)) path += '/index';

          // local @mfe module
          path = path.replace(/^@mfe\//, '../');

          // an npm module
          if (!path.startsWith('.'))
            return `${statement}'https://cdn.skypack.dev/${path}'`;

          // if no extension
          if (!/\.\w+$/.test(path)) path += '.js';

          return `${statement}'${path}'`;
        }
      )
  );
}
