module.exports = function(source) {
  const re = /<Isomorphic\s+name=['"]([^'"]+)['"]\s+component=\{\s*require\(\s*['"]([^'"]+)['"]\s*\)\s*\}/gm
  const chunks = [];

  while(true) {
    const match = re.exec(source);
    if (match == null) break;
    
    chunks.push(`'${match[1]}': require('${match[2]}')`)
  }

  return `module.exports = { ${chunks.join(',\n')} };`;
}
