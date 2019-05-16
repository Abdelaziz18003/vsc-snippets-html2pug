function fixTabs (array) {
  let previousTag = {};
  let newArray = array.map(string => {
    let currentTag = getTag(string);
    if (currentTag.tagName === previousTag.tagName) {
      string = string.substring(currentTag.level);
      string = indent(string, previousTag.level);
      previousTag = getTag(string);
    } else {
      previousTag = getTag(string);
    }
    return string;
  })
  return newArray;
}

function indent (string, level) {
  let indentation = '';
  for (let i = 0; i < level; i++) {
    indentation += '\t';
  }
  return indentation + string;
}

function getTag (string) {
  let startingIndex = string.indexOf('q-');
  let endingIndex = string.indexOf('(');
  let tag = string.substring(startingIndex, endingIndex !== -1 ? endingIndex : undefined);
  return {tagName: tag, level: startingIndex};
}

module.exports = fixTabs