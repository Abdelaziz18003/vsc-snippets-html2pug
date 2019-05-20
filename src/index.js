"use strict";

const fs = require('fs');
const { transformSnippets, writeSnippetsFile } = require('./helpers');

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
