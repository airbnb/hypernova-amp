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
