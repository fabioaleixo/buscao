"use strict";

let dropdown = document.getElementById('raca-select');
dropdown.length = 0;
let btnRefresh = document.getElementById('btn-refresh');
let nomeCao = document.getElementById("nomeCao");

let defaultOption = document.createElement('option');
defaultOption.text = 'Escolha uma raça';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

function callUrl (qualUrl,qualEvento) {
    const url = qualUrl;
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
        if (request.status === 200) {

            const data = JSON.parse(request.responseText).message;
            const dataTratada = Object.keys(data);

            if (qualEvento == 0) {
                let option;
                for (let i = 0; i < dataTratada.length; i++) {
                    option = document.createElement('option');                    
                    option.text = dataTratada[i];
                    option.value = dataTratada[i];
                    dropdown.add(option);
                }
            } else if (qualEvento == 1) {
                const icoLoading = document.getElementById("icoLoading");
                const footerHolder = document.getElementById("footer");
                const imgCao = document.getElementById("imgCao");
                const clearInput = document.getElementById('raca-input');
                icoLoading.classList.add("fullOpacity");
                imgCao.classList.add("lessOpacity");
                footerHolder.classList.add("noMargin");
                setTimeout(function(){ icoLoading.classList.remove("fullOpacity"); }, 2500);
                setTimeout(function(){ document.getElementById('imgCao').src = data; }, 1500);
                setTimeout(function(){ imgCao.classList.remove("lessOpacity"); }, 2500);
                setTimeout(function(){ imgCao.classList.add("borda"); }, 3000);
                dropdown.selectedIndex = 0;
                clearInput.value = '';
            } 

        } else {                  
            erro('0');
        }
    }

    request.onerror = function() {
        console.error('Ocorreu um erro lendo a URL de origem dos dados:' + url);
    };

    request.send();

}

callUrl('https://dog.ceo/api/breeds/list/all',0);

dropdown.addEventListener("change", buildUrl);
btnRefresh.addEventListener("click", buildUrl);

function buildUrl() {
    const input = document.getElementById('raca-input').value;
    const dropdownValue = document.getElementById('raca-select').value;
    if (input == "" && dropdownValue == "Escolha uma raça") {
        erro("1");
        return;
    }  
    const infoDogs = {
        qualRaca: (input == "" && dropdownValue != "Escolha uma raça" ? dropdownValue : input),
        nomeRaca: (input == "" && dropdownValue != "Escolha uma raça" ? dropdownValue : input)
    }
    const qualRaca = infoDogs.qualRaca;
    const nomeRaca = infoDogs.nomeRaca;
    nomeCao.innerHTML = nomeRaca.toUpperCase();
    const builtUrl = "https://dog.ceo/api/breed/" + qualRaca + "/images/random";
    callUrl(builtUrl,1);
}

function erro(erroId) {
    
    const erroTratado = parseInt(erroId);
    
    const erroMsg = [
        'Raça não farejada, digo, encontrada :-(','Escreva a raça do cãozinho e, se achar, me dê um biscoitinho :-P'
    ]
    
    document.getElementById('erroTxt').innerHTML = erroMsg[erroTratado];
    document.getElementById('nomeCao').innerHTML = "";
    
}