# hypernova-amp

[Aphrodite](https://github.com/Khan/aphrodite) bindings for [Hypernova](https://github.com/airbnb/hypernova)
for rendering AMP pages.

## Install

```sh
npm install hypernova-amp
```

## Usage

Here's how use use it in your module:

```js
import { renderReactAmpWithAphrodite } from 'hypernova-amp';
import MyComponent from './src/MyComponent.jsx';

export default renderReactAmpWithAphrodite(
  'MyComponent.hypernova.js', // this file's name (or really any unique name)
  MyComponent,
);
```

## Publishing a new release

- Add entry to CHANGELOG.md
- Make a commit, directly onto master, that does nothing but adds/updates the changelog and bumps package.json, with a commit message of “vX.Y.Z"
- `git tag vX.Y.Z`
- `git push --tags`
- wait for travis to pass
- `npm install && npm test && npm publish`