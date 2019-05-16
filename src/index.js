"use strict"

const fs = require('fs');
const html2pug = require('html2pug');
const fixTabs = require('./src/fixTabs');

function convert (options = {src: './html-snippets.json', dist: './pug-snippets.json'}) {
  let htmlSnippets = fs.readFileSync(options.src, {encoding: 'utf-8'})
  let pugSnippets = JSON.parse(htmlSnippets);
  for (let key in pugSnippets) {
    let htmlBody = pugSnippets[key].body.join(' ').replace(/\t/g, '');
    console.log(htmlBody)
    let pugBody = html2pug(htmlBody, { tabs: true, isFragment: true });
    pugSnippets[key].body = fixTabs(pugBody.split('\n'));
  }
  fs.writeFileSync(options.dist, JSON.stringify(pugSnippets, null, 4));
}

module.exports = {
  convert
}