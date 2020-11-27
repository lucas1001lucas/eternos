function AlteraPericia(pericia) {
    let exibePericia = window.document.getElementById(pericia)

    exibePericia.innerHTML = '+' + prompt('Qual será o novo valor da Perícia?')
}
function AlteraModificador(modificador) {
    let exibeModificador = window.document.getElementById(modificador)

    exibeModificador.innerHTML = modificador + ' - ' + prompt('Qual será o novo valor do Modificador?')
}
    
    