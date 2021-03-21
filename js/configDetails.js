let firebaseConfig = {
    apiKey: "AIzaSyCY97qXpbgMUcItkk2aLwix0FDAfrAZHSE",
    authDomain: "testandomensagem27.firebaseapp.com",
    projectId: "testandomensagem27",
    storageBucket: "testandomensagem27.appspot.com",
    messagingSenderId: "633679985653",
    appId: "1:633679985653:web:bc0b484b4b0d8fc0197ebc"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let database = firebase.database();

let getNome = database.ref('eternos/' + 1 + '/nome');
let getJogador = database.ref('eternos/' + 1 + '/jogador');
let getCasa = database.ref('eternos/' + 1 + '/casa');
let getEspecialidade = database.ref('eternos/' + 1 + '/especialidade');

getNome.on('value', (snapshot) => {
    const dNome = snapshot.val();
    const acessoNome = document.getElementById('nome')
    acessoNome.innerHTML = dNome
});

getJogador.on('value', (snapshot) => {
    const dJogador = snapshot.val();
    const acessoJogador = document.getElementById('jogador')
    acessoJogador.innerHTML = dJogador
});

getCasa.on('value', (snapshot) => {
    const dCasa = snapshot.val();
    const acessoCasa = document.getElementById('casa')
    acessoCasa.innerHTML = dCasa
});

getEspecialidade.on('value', (snapshot) => {
    const dEspecialidade = snapshot.val();
    const acessoEspecialidade = document.getElementById('especialidade')
    acessoEspecialidade.innerHTML = dEspecialidade
});