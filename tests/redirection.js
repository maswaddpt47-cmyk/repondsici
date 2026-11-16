// node tests/redirection.js : vérifie la destination calculée pour chaque adresse tapée.
const fs = require('fs'), vm = require('vm');
const src = fs.readFileSync(process.env.REDIRECTION_JS || __dirname + '/../redirection.js', 'utf8');
const cas = [
  ['/K7M3P', 'https://wooclight.alwaysdata.net/?s=K7M3P'],
  ['/k7m3p/', 'https://wooclight.alwaysdata.net/?s=K7M3P'],
  ['/', 'https://wooclight.alwaysdata.net/'],
  ['/O0O0O', 'https://wooclight.alwaysdata.net/'],
  ['/K7M3', 'https://wooclight.alwaysdata.net/'],
  ['/K7M3PQ', 'https://wooclight.alwaysdata.net/'],
  ['/K7M3P/x', 'https://wooclight.alwaysdata.net/'],
  ['//evil.example', 'https://wooclight.alwaysdata.net/'],
];
let echecs = 0;
for (const [chemin, attendu] of cas) {
  let obtenu = null;
  vm.runInNewContext(src, { location: { pathname: chemin, replace: u => { obtenu = u; } } });
  if (obtenu !== attendu) { echecs++; console.log('ÉCHEC', chemin, '→', obtenu, '(attendu', attendu + ')'); }
}
console.log(`redirection : ${cas.length - echecs} / ${cas.length} cas OK`);
process.exit(echecs ? 1 : 0);
