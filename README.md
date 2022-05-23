A [Parcel 2](https://parceljs.org/) transformer for [Markdoc](https://markdoc.io/).

## Installation

Start by installing the package:

```bash
npm install parcel-transformer-markdoc --save-dev
```

Then, in the `.parcelrc` file, add the transformer like this:

```json
{
  "extends": ["@parcel/config-default"],
  "transformers": {
    "*.md": ["parcel-transformer-markdoc"]
  }
}
```

## Example use

When using React.js with Parcel:

```js
import text from "./hello.md";
import Markdoc from "@markdoc/markdoc";
import React from "react";

export function App() {
  const content = Markdoc.renderers.react(text, React);
  return <main>{content}</main>;
}
```

## License

MIT License
