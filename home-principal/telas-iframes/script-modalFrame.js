import { buscarUsuarios, buscarUsuarioById, criarUsuario, updateUsuario, deletarUsuario } from '../../services/serviceUsuarios.js';

import { buscarCuriosidade} from '../../services/serviceCadastro.js';

async function fetchUsuarios() {

    const usuarios = await buscarUsuarios(); // retorna o data
    const curiosidades = await buscarCuriosidade(); //retorna as curiosidades

let usuarioFront = '';
let qtdInteresses;
let qtdSentimentos;
let qtdValores;

curiosidades.forEach(curiosidade => {
    qtdInteresses = curiosidade.interesses.length;
    qtdSentimentos = curiosidade.sentimentos.length;
    qtdValores = curiosidade.valores.length;
});

usuarios.forEach(usuario => {
    const dataCriacaoString = new Date(Date.parse(usuario.dataCriacao)).toLocaleDateString('pt-BR');
    
    usuarioFront += `<li>
            <article class="cardPerfil">
                <div class="header">
                    <img class="foto" src="../../imgs/foto-pedro.png" alt="foto-pedro">
                    <div class="contacts">
                        <div class="infos">
                            <p>${usuario.fatosDados.nome} | <i class="arroba">@${usuario.fatosDados.nomeUsuario}</i></p>
                            <p class="code">23-13030</p>
                        </div>
                        <p class="email">${usuario.fatosDados.email}</p>
                        <div class="status">
                            <p>Ativo</p>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="feelings">
                        <p><strong>${qtdInteresses}</strong> Interesses <img class="iconF" src="../../icons/hat.png" alt=""></p>
                        <p><strong>${qtdSentimentos}</strong> Sentimentos <img class="iconF" src="../../icons/heart.png" alt=""></p>
                        <p><strong>${qtdValores}</strong> Valores <img class="iconF" src="../../icons/leaf.png" alt="">
                        </p>
                    </div>
                    <div class="details">
                        <div class="databox">
                            <img class="iconD" src="../../icons/calendary.svg" alt="">
                            <p>Criado em: ${dataCriacaoString}</p>
                        </div>
                        <div class="complemento">
                            <div class="databox">
                                <img class="iconD" src="../../icons/save.svg" alt="">
                                <p>Editado recentemente por: @edurdgs</p>
                            </div>
                            <div class="sde">
                                <button class="btnShare">
                                    <img class="iconC" src="../../icons/share.png" alt="">
                                </button>
                                <button class="btnDelete">
                                    <img class="iconC" src="../../icons/trash.png" alt="">
                                </button>
                                <button class="btnEdit">
                                    <img class="iconC" src="../../icons/pencil.png" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </li>
        `
    });
    listaUsuarios.innerHTML = usuarioFront;

    document.querySelectorAll(".btnShare").forEach(btn => {
        btn.addEventListener('click', function () {
            window.parent.postMessage('openModal', '*');
        });
    });

    document.querySelectorAll(".btnDelete").forEach(btn => {
        btn.addEventListener('click', function () {
            window.parent.postMessage('openDel', '*');
        });
    });

    document.querySelectorAll(".btnEdit").forEach(btn => {
        btn.addEventListener('click', function () {
            window.parent.postMessage('openEdit', '*');
        });
    });
    
}

window.onload = fetchUsuarios; // quando a janela carregar vai chamar esse método

const listaUsuarios = document.querySelector("#profiles");
