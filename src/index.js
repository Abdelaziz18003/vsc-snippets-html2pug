"use strict";

const fs = require('fs');
const { transformSnippets, writeSnippetsFile } = require('./helpers');

/**
 * Generate VSCode Pug snippets out of html ones
 * 
 * @param {Object} options
 * Options object, required fields are `src` and `dist`.
 */

function generatePugSnippets (options) {
  if (options.src && options.dist) {
    const htmlSnippets = fs.readFileSync(options.src, {encoding: 'utf-8'});
    const pugSnippets = transformSnippets(htmlSnippets);
    writeSnippetsFile(options.dist, pugSnippets);
  } else {
    throw new Error('Missing required arguments');
  }
}

module.exports = generatePugSnippets
