import typescript from 'rollup-plugin-typescript';
import vue from 'rollup-plugin-vue';

export default {
  input: 'index.ts',
  output: {
    format: 'esm',
    file: 'dist/index.js',
    sourcemap: true,
  },
  external: ['vue'],
  plugins: [typescript(), vue()],
};
