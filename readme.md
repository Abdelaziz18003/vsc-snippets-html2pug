# vsc-snippets-html2pug

A tool to automatically generate VSCode Pug snippets out of HTML ones.

## Installation

```bash
npm install vsc-snippets-html2pug
```

## Usage

### From CLI

```bash
vsc-snippets-html2pug options

# example
vsc-snippets-html2pug --src ./html-snippets.json --dist ./pug-snippets.json
```

### From JS file

```js
const generatePugSnippets = require('vsc-snippets-html2pug');
const options = {
  src: './html-snippets.json',
  dist: './pug-snippets.json'
}

generatePugSnippets(options);
```

## Options

- ***--src***:    HTML snippets file path.
- ***--dist***:   Pug snippets file path that will be created