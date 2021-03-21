function updateDetails() {
    let nome = document.getElementById('nomeInput')
    let jogador = document.getElementById('jogadorInput')
    let casa = document.getElementById('casaInput')
    let especialidade = document.getElementById('especialidadeInput')

    document.getElementById('nome').innerHTML = nome
    document.getElementById('jogador').innerHTML = jogador
    document.getElementById('casa').innerHTML = casa
    document.getElementById('especialidade').innerHTML = especialidade
}