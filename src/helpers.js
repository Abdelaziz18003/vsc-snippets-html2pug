const fs = require('fs');
const html2pug = require('html2pug');

function fixQuotes (array) {
  return array.map(string => {
    return string.replace(/\\'/g, "'")
  })
}

function transformSnippets (htmlSnippets) {
  let pugSnippets = JSON.parse(htmlSnippets);
  for (let key in pugSnippets) {
    let htmlBody = pugSnippets[key].body.join(' ').replace(/\t/g, '');
    let pugBody = html2pug(htmlBody, { tabs: true, fragment: true });
    pugSnippets[key].body = fixQuotes(pugBody.split('\n'));
  }
  return JSON.stringify(pugSnippets, null, 2);
}

function writeSnippetsFile (path, snippets) {
  fs.writeFileSync(path, snippets);
  console.log(
    '------------------------------------------\n' +
    'Pug Snippets file was created successfully\n' +
    `${path}\n` +
    '------------------------------------------'
  );
}

module.exports = {
  fixQuotes,
  transformSnippets,
  writeSnippetsFile
}