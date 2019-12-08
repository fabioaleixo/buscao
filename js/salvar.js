let btnSalvar = document.getElementById('btnSalvar');
let btnExcluir = document.getElementById('btnExcluir');

btnSalvar.addEventListener("click", salvarEstilos);
btnExcluir.addEventListener("click", excluirEstilos);

const corFinal = localStorage.getItem("corGravada");
const textoFinal = localStorage.getItem("textoGravado");
const qualData = localStorage.getItem("dataGravada");

function salvarEstilos () {
    const lembrarCor = document.getElementById('cor-select').options.selectedIndex;
    const lembrarFonte = document.getElementById('fonte-select').options.selectedIndex;
    const lembrarData = new Date();
    localStorage.setItem('corGravada',lembrarCor);
    localStorage.setItem('textoGravado',lembrarFonte);
    localStorage.setItem('dataGravada',lembrarData);
    msg('0');
}

function excluirEstilos () {
    localStorage.removeItem('corGravada');
    localStorage.removeItem('textoGravado');
    localStorage.removeItem('dataGravada');
    msg('1');
}

document.getElementById('cor-select').selectedIndex = corFinal;
document.getElementById('fonte-select').selectedIndex = textoFinal;
if (qualData != null) {
    msg('2');
}

function msg(msgId) {
    
    const msgTratada = parseInt(msgId);
    
    const msgs = [
        'Seu estilo foi salvo!','Seu estilo foi limpo!','Últimos dados salvos em ' + qualData
    ]
    
    document.getElementById('msgTxt').innerHTML = msgs[msgTratada];
    
}