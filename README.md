| :exclamation: Deprecation Notice |
|:-|
|We want to express our sincere gratitude for your support and contributions to the Hypernova open source project. As we are no longer using this technology internally, we have come to the decision to archive the Hypernova repositories. While we won't be providing further updates or support, the existing code and resources will remain accessible for your reference. We encourage anyone interested to fork the repository and continue the project's legacy independently. Thank you for being a part of this journey and for your patience and understanding.|
---

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
  {/* Options */},
);
```


## Options

### `prependCSS` (string)
Inserts css before the generated CSS.

### `appendCSS` (string)
Inserts css after the generated CSS.

### `enableAmpBind` (bool)
Set to `true` to enable [amp-bind](https://www.ampproject.org/docs/reference/components/amp-bind).
Default: `false`.
This will transform any attribute named `amp-bind-x` into an attribute named `[x]`. This is necessary
because react does not support `[x]` prop even in conjunction with `is` (see next section).

### `enableRemoveIs` (bool)
Utilizes regex to remove `is` attribute. React has an undocumented `is` prop that when added to an element,
prevents React from transforming/filtering props that you add to the element. Any prop that you
add will be added as an attribute with the same name. For example, adding a `class` 
prop to a `<div>` will add a `class` attribute to the `<div>`. This also means that adding a 
`className` prop will not do what you normally would expect it to do. You'll want to add the `is`
prop when using `amp-bind-class` together with `class`, for example. However, the problem arises
where the `is` attribute is also added to the element which causes an AMP validation error. Enabling
the `enableRemoveIs` option will remove the `is` attribute and thus eliminate the validation error.

Here's an example which utilizes `enableAmpBind` and `enableRemoveIs`:

```
<div
  is
  amp-bind-class={`showThing ? '${thingClass} ${thingOpenClass}' : '${thingClass}'`}
  class={ampSearchBarClass}
>
  ...
</div>
```

... elsewhere you might have a button like this:

```
<div
  is
  role="button"
  on="tap:AMP.setState({ showThing: !showThing })"
  tabindex="0"
>
  Toggle Thing Component
</div>
 ```

### `scripts` (array)
Each element of the array is an object with any of the following values:
- `scripts.customElement` (string)
- `scripts.customTemplate` (string)
- `scripts.src` (string): 

### `ampExperimentToken` (string)
Adds `amp-experiment-token` meta tag with token.

### `title` (string)
Page title

### `canonicalUrl` (string)
Adds meta tag with canonical URL.

### `jsonSchema` (object)
Adds json schema meta tag.

### `ampState` (object)
Adds [amp-state tag](https://www.ampproject.org/docs/reference/components/amp-bind#initializing-state-with-amp-state).

### `ampAnalytics` (object)
Adds [amp-analytics tag](https://developers.google.com/analytics/devguides/collection/amp-analytics/)

### `ampGoogleAnalytics` (object)
Adds [amp-analytics (google type) tag](https://developers.google.com/analytics/devguides/collection/amp-analytics/)


## Publishing a new release

- Add entry to CHANGELOG.md
- Make a commit, directly onto master, that does nothing but adds/updates the changelog and bumps package.json, with a commit message of “vX.Y.Z"
- `git tag vX.Y.Z`
- `git push --tags`
- wait for travis to pass
- `npm install && npm test && npm publish`
