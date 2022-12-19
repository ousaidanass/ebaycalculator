'use strict';
var prixvente = document.getElementById('prixvente');
var fraislivraisonme = document.getElementById('fraislivraisonme');
var coutarticle = document.getElementById('coutarticle');
var fraislivraison = document.getElementById('fraislivraison');
var quantitvendu = document.getElementById('quantitvendu');
var fraiss = document.getElementById('fraiss');
var benefise = document.getElementById('benefise');
var booton = document.getElementById('booton');

function virguleverspoint(){
    let prixvente_ = prixvente.value.replace(",", ".");
    let fraislivraisonme_ = fraislivraisonme.value.replace(",", ".");
    let coutarticle_ = coutarticle.value.replace(",", ".");
    let fraislivraison_ = fraislivraison.value.replace(",", ".");
    return [prixvente_, fraislivraisonme_, coutarticle_, fraislivraison_];
}


function VersementEbay(_prixvente_, _fraislivraisonme_){
    let pourcentagecalc1 = (parseFloat(_prixvente_) + parseFloat(_fraislivraisonme_)) * 10;
    let pourcentagecalc =  parseFloat(pourcentagecalc1) / 100;
    let versementebay = parseFloat(_prixvente_) + parseFloat(_fraislivraisonme_) - pourcentagecalc - 0.35;
    return versementebay;
}

booton.onclick = function() {
    var [_prixvente_, _fraislivraisonme_, _coutarticle_, _fraislivraison_] = virguleverspoint();
    let benefisse = (VersementEbay(_prixvente_, _fraislivraisonme_) - (parseFloat(_coutarticle_) + parseFloat(_fraislivraison_))) * parseFloat(quantitvendu.value);
    let frais = (parseFloat(_prixvente_) + parseFloat(_fraislivraisonme_)) - VersementEbay(_prixvente_, _fraislivraisonme_);
    fraiss.innerHTML = 'FRAIS: ' + '<span style="color: red">' + parseFloat(frais).toFixed(3) + '€</span>';
    benefise.innerHTML = 'BÉNÉFICE TOTAL: ' + '<span style="color: red">' + parseFloat(benefisse).toFixed(3) + '€</span>';
}