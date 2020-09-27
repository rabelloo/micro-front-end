// eslint-disable-next-line no-undef
module.exports = { replaceImports };

/**
 * Replaces imports in @text so that they're browser compatible.
 * @param text Text to replace imports in.
 */
function replaceImports(text) {
  return text.replace(
    /(import(?:\(| .*))['"](.+)['"]/g,
    (t, statement, path) => {
      // already valid browser import
      if (/^https?:\/\//.test(path)) return t;

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
  );
}
