function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function dominantDirection(text) {
  const dirList = countBy(text,letter => {
    let script = characterScript(letter.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(script => script.name !== 'none');
  
  return dirList.reduce((final, curr) => final.count > curr.count ? final : curr).name; 
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
