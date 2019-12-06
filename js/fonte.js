WebFontConfig = {
  google: {
    families: ['Solway', 'Roboto','Indie Flower','Fredoka One','Old Standard TT']
  }
};
(function(d) {
  var wf = d.createElement('script'), s = d.scripts[0];
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  wf.async = true;
  s.parentNode.insertBefore(wf, s);
})(document);

let novaFonte = document.getElementById('fonte-select');
novaFonte.addEventListener("change", mudaFonte);
                           
function mudaFonte () {
    const novaFonteVal = novaFonte.value;
    document.getElementById('nomeCao').style.fontFamily = novaFonteVal;
}