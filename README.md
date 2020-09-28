# Micro Front End ~ [![pages](https://img.shields.io/github/deployments/rabelloo/micro-front-end/github-pages?color=blue&label=pages&logo=github)](https://rabelloo.github.io/micro-front-end)

Example Micro Front End shell for any renderer (React, Custom Elements, etc.) with zero requirements and a simple interface (a DOM node and a render function exports).

[See it in your browser!](https://rabelloo.github.io/micro-front-end)

## Contents

You'll need a unix shell to run most commands, if you're on Windows use your Git terminal.

Some scripts will use Deno if you have it installed, they all fallback to Node.

- [Inspect](#Inspect)
- [Monorepo](#Monorepo)
- [Development](#Development)
- [Build](#Build)
- [Principles](#Principles)

## Inspect

Run `npm run build`, all MFEs will be transpiled to browser compatible ESM JavaScript.

Then run `npm run inspect`, which opens a server in your default browser.

Find in `public/dist` the generated code, or inspect the sources in the browser.

It is pretty much how you could write vanilla ECMAScript Modules if you didn't want any niceties like `TypeScript`, or if it isn't required by you framework of choice.

## Monorepo

A note about this monorepo. All packages can be found under the `packages` folder.

Each folder in there represents a separate app that could be a different repository. They're all kept here for example simplicity.

`mfe-interface` is the package all of them could import with simple TypeScript types to enforce the MFE interface, and a `devShell` for separate MFE development. Also contains some base styles, not necessary or applicable in most shells.

`mfe-shell` is the actual MFE shell implementation. It loads and decides how to render each MFE. Contrived example, just renders all of them in a grid. Similar to the `devShell`.

All others are separate apps each developed in a different framework/renderer/technology stack.

## Development

Run `npm run start`, `parcel` will start a server and open your default browser, as it builds and watches your changes.

In the root this watches all packages, and starts `shell` with them all loaded in.

In each package, it starts only that specific app.

## Build

Run `npm run build`.

In the root this builds all packages into `public/dist`, then transpiles import paths so that they're browser compatible.

In each package they're built into `dist` with their configured bundler/framework/cli.

## Principles

The interface is simple, every module exports a constant `root` that holds a DOM node, and a `render` function.

```ts
interface Module {
  render: (props: Props) => void;
  root: Element;
}
```

The `root` DOM node is fully managed by the module and the shell does not tamper with it, except for setting the `id` in this example shell (but it could also not touch it, period).

The `render` method is called when the shell needs updates from the MFE (for example, when shell state changes).

Each module is then dynamically imported - in the browser that requires a fully qualified path (either relative or absolute).

```ts
const absoluteModule = await import('https://absolute.path.to/module');
const relativeModule = await import('./relative/path/to/module');
```

How the shell is aware of the modules it should load can vary, in the example shell it's hard-coded, but it could also be an HTTP call or user input or anything else.

All of these could be written without any bundlers or build processes whatsoever (except libraries that require a build step like Angular, React, and Svelte), but I like TypeScript.
