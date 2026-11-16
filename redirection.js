// repondsici.fr/K7M3P → WoocLight, atelier K7M3P. Aucun cookie, aucun appel tiers :
// la page lit seulement l'adresse tapée et renvoie vers l'hébergement de WoocLight.
(function () {
  var CIBLE = 'https://wooclight.alwaysdata.net';
  // Caractères du code WoocLight (sans 0/O, 1/I/L), comme le .htaccess de WoocLight.
  var code = location.pathname.replace(/^\/+|\/+$/g, '');
  var dest = /^[A-HJKMNP-Za-hjkmnp-z2-9]{5}$/.test(code) ? CIBLE + '/?s=' + code.toUpperCase() : CIBLE + '/';
  location.replace(dest);
})();
