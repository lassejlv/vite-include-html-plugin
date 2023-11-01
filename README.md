# Vite Include Html File

This is a basic plugin that allows you to import other html files into one file. (Only works for vanilla)

## Installation

```bash
npm i vite-plugin-include-html -D
```

## Usage

`vite.config.js` file

```js
import includeHtml from "vite-plugin-include-html";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [includeHtml()],
});
```

```html
<include src="myfile.html"></include>
```

### Output

```html
<div>
  <h1>This is cool</h1>
  <p>Yoo what is going on in here this is a test</p>
</div>
```
