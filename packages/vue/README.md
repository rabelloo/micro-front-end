### Tools

Configuring Vue is very finnicky.

`@vue/cli` works for a dev server, but couldn't get it to build `esm`.

`rollup` builds `esm` well, but couldn't get the dev server to work.

`parcel` can't do either for Vue3, loaders are outdated, needs Parcel2 support.

So the result is a hybrid of the approaches that work :/

### Files

As a consequence of the above, files need to be in `src` unlike other packages.

`main.ts` acts as `dev.ts`.

`index.ts` just re-exports `src/index.ts`.

`index.html` is in `public`.

Output is luckily still `dist`.

### Reactivity

Since Vue does not expose a render function that is functionally pure, the best way I found to update props was `reactive`.

If there's a more appropriate way please do let me know.
