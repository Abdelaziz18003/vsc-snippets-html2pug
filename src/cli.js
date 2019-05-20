#!/usr/bin/env node

"use strict";
const generatePugSnippets = require('./index');

const cliOptions = ['--src', '--dist'];
const help = `
A tool to automatically generate Pug vscode snippets from HTML ones.

Usage:
  vsc-snippets-html2pug options

Options:
  --src:    HTML snippets file path.
  --dist:   Pug snippets file path that should be created

Example:
  vsc-snippets-html2pug --src ./html-snippets.json --dist ./pug-snippets.json
`;

function printHelp () {
  console.log(help);
}

function getOptionValue (optionName) {
  const optionNameIndex = process.argv.indexOf(optionName);
  const optionValueIndex = optionNameIndex + 1;
  return optionValueIndex ? process.argv[optionValueIndex] : undefined;
}

function parseArgv () {
  let options = {}
  cliOptions.forEach(optionName => {
    const optionValue = getOptionValue(optionName);
    if (optionValue) {
      options[optionName.replace('--', '')] = optionValue;
    }
  })
  return options;
}

if (process.argv.length === 2 || process.argv.includes('help')) {
  printHelp()
} else {
  const options = parseArgv();
  generatePugSnippets(options);
}
