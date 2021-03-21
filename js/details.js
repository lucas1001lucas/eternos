function updateDetails() {

    let nome = document.getElementById('nomeInput').value
    let jogador = document.getElementById('jogadorInput').value
    let casa = document.getElementById('casaInput').value
    let especialidade = document.getElementById('especialidadeInput').value

    console.log(nome)

    if (nome != "" && jogador != "" && casa != "" && especialidade != "") {
        database.ref('eternos/' + 1).set({
            nome: nome,
            jogador: jogador,
            casa: casa,
            especialidade: especialidade
        });
    }
}