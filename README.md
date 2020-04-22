# [React Icons](https://vyaguta-icons.netlify.com)


# Original Library Information
# [Original Demo](https://react-icons.netlify.com)
# [Original Repo] (https://github.com/react-icons/react-icons)

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-icons

Include popular icons in your React projects easily with `react-icons`, which utilizes ES6 imports that allows you to include only the icons that your project is using.

## Installation

### Yarn
```bash
yarn add vyaguta-icons
```

### NPM
```bash
npm install vyaguta-icons --save
```

## Usage

```jsx
import { UiAirplay } from 'vyaguta-icons/ui';

class Question extends React.Component {
    render() {
        return <h3> Lets go for a <UiAirplay />? </h3>
    }
}
```

[View the documentation](https://vyaguta-icons.netlify.com) for further usage examples and how to use icons from other packages. *NOTE*: each Icon package has it's own subfolder under `react-icons` you import from.

For example, to use an icon from **Material Design**, your import would be: `import { ICON_NAME } from 'react-icons/md';`

## Icons

| Icon Library                                                  | License                                                                                   |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [Feather](https://feathericons.com/)                          | [MIT](https://github.com/feathericons/feather/blob/master/LICENSE)                        |
| [Unicons Icons](https://github.com/Iconscout/unicons)         | [Apache License 2.0](https://github.com/Iconscout/unicons/blob/master/LICENSE)            |

You can add more icons by submitting pull requests or creating issues.

## Configuration

You can configure react-icons props using [React Context API](https://reactjs.org/docs/context.html).

_Requires **React 16.3** or higher._

```jsx
import { IconContext } from "vyaguta-icons";

<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
  <div>
    <FaFolder />
  </div>
</IconContext.Provider>
```

| Key         | Default               | Notes                           |
| ----------- | --------------------- | ------------------------------- |
| `color`     | `undefined` (inherit) |                                 |
| `size`      | `1em`                 |                                 |
| `className` | `undefined`           |                                 |
| `style`     | `undefined`           | Can overwrite size and color    |
| `attr`      | `undefined`           | Overwritten by other attributes |

Ending up with a large JS bundle? Check out [this issue](https://github.com/vyaguta-icons/vyaguta-icons/issues/154).

### Adjustment CSS

From version 3, `vertical-align: middle` is not automatically given. Please use IconContext to specify className or specify an inline style.

#### Global Inline Styling

```tsx
<IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
```

#### Global `className` Styling

Component

```tsx
<IconContext.Provider value={{ className: 'vyaguta-icons' }}>
```

CSS

```css
.vyaguta-icons {
  vertical-align: middle;
}
```

### TypeScript native support

Dependencies on `@types/vyaguta-icons` can be deleted.

#### Yarn
```bash
yarn remove @types/vyaguta-icons
```

#### NPM
```bash
npm remove @types/vyaguta-icons
```

## Contributing

### Development

```bash
yarn
cd packages/vyaguta-icons
yarn build
```
## Licence

MIT

- Icons are taken from the other projects so please check each project licences accordingly.
