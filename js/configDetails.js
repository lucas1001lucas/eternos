let firebaseConfig = {
    apiKey: "AIzaSyBV-elOB-low2ovVrGL6vDqIAHSO6EZumQ",
    authDomain: "ficha-eternos.firebaseapp.com",
    projectId: "ficha-eternos",
    storageBucket: "ficha-eternos.appspot.com",
    messagingSenderId: "427482599114",
    appId: "1:427482599114:web:ba83fe11346dc06a3cee33",
    measurementId: "G-F09NGP2CK7"
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