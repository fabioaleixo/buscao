let btnSalvar = document.getElementById('btnSalvar');
let btnExcluir = document.getElementById('btnExcluir');

btnSalvar.addEventListener("click", salvarEstilos);
btnExcluir.addEventListener("click", excluirEstilos);

const corFinal = localStorage.getItem("corGravada");
const textoFinal = localStorage.getItem("textoGravado");

function salvarEstilos () {
    const lembrarCor = document.getElementById('cor-select').options.selectedIndex;
    const lembrarFonte = document.getElementById('fonte-select').options.selectedIndex;
    localStorage.setItem('corGravada',lembrarCor);
    localStorage.setItem('textoGravado',lembrarFonte);
    msg('0');
}

function excluirEstilos () {
    localStorage.removeItem('corGravada');
    localStorage.removeItem('textoGravado');
    msg('1');
}

function msg(msgId) {
    
    const msgTratada = parseInt(msgId);
    
    const msgs = [
        'Seu estilo foi salvo!','Seu estilo foi limpo!'
    ]
    
    document.getElementById('msgTxt').innerHTML = msgs[msgTratada];
    
}

document.getElementById('cor-select').selectedIndex = corFinal;
document.getElementById('fonte-select').selectedIndex = textoFinal;