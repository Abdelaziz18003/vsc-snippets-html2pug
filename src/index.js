"use strict";

const fs = require('fs');
const html2pug = require('html2pug');
const { fixQuotes } = require('./helpers');

function convert (options) {
  if (options.src && options.dist) {
    let htmlSnippets = fs.readFileSync(options.src, {encoding: 'utf-8'});
    let pugSnippets = JSON.parse(htmlSnippets);
    for (let key in pugSnippets) {
      let htmlBody = pugSnippets[key].body.join(' ').replace(/\t/g, '');
      let pugBody = html2pug(htmlBody, { tabs: true, fragment: true });
      pugSnippets[key].body = fixQuotes(pugBody.split('\n'));
    }
    fs.writeFileSync(options.dist, JSON.stringify(pugSnippets, null, 2));
  } else {
    throw new Error('Missing required arguments');
  }
}

module.exports = {
  convert
}