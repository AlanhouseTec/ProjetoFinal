const func = document.getElementById('func');
const merc = document.getElementById('merc');
const config = document.getElementById('config');
const funcionarios = document.getElementById('funcionarios');
const novoFunc = document.getElementById('novofunc');
const adicionarfunc = document.getElementById('adicionarfunc');
const addFunc = document.getElementById('addfunc');
const mercadorias = document.getElementById('mercadorias');
const novaMerc = document.getElementById('novamerc');
const adicionarMerc = document.getElementById('adiconarmerc');
const addMerc = document.getElementById('addmerc');
const configuracoes = document.getElementById('configuracoes');

func.addEventListener('click', () => {
    if (mercadorias.style.display === 'flex'){
        mercadorias.style.display = 'none';
    }
    if (configuracoes.style.display === 'flex'){
        configuracoes.style.display = 'none';
    }
    if (novoFunc.style.display === 'flex'){ 
        novoFunc.style.display = 'none';
    }
    if (funcionarios.style.display === 'flex') {
        funcionarios.style.display = 'none';
    } else {
        funcionarios.style.display = 'flex';
    }
});
adicionarfunc.addEventListener('click', () => {
    if (novoFunc.style.display === 'flex') {
        novoFunc.style.display = 'none';
    } else {
        novoFunc.style.display = 'flex';
    }
});
addFunc.addEventListener('click', () => {
    novoFunc.style.display = 'none';
});

merc.addEventListener('click', () => {
    if (funcionarios.style.display === 'flex') {
        funcionarios.style.display = 'none';
    }
    if (configuracoes.style.display === 'flex'){
        configuracoes.style.display = 'none';
    }
    if (novaMerc.style.display === 'grid'){
        novaMerc.style.display = 'none';
    }
    if (mercadorias.style.display === 'flex') {
        mercadorias.style.display = 'none';
    } else {
        mercadorias.style.display = 'flex';
    }
});
adicionarmerc.addEventListener('click', () => {
    if (novaMerc.style.display === 'grid') {
        novaMerc.style.display = 'none';
    } else {
        novaMerc.style.display = 'grid';
    }
});
addMerc.addEventListener('click', () => {
    novaMerc.style.display = 'none';
});

config.addEventListener('click', () => {
    if (funcionarios.style.display === 'flex') {
        funcionarios.style.display = 'none';
    }
    if (mercadorias.style.display === 'flex') {
        mercadorias.style.display = 'none';
    }
    if (configuracoes.style.display === 'flex') {
        configuracoes.style.display = 'none';
    } else {
        configuracoes.style.display = 'flex';
    }
});