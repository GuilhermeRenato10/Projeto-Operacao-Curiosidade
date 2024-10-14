import { buscarUsuarios, buscarUsuarioById, criarUsuario, updateUsuario, deletarUsuario } from '../../services/serviceUsuarios.js';

import { buscarCuriosidade } from '../../services/serviceCadastro.js';

async function fetchUsuarios() {
    const usuarios = await buscarUsuarios(); // retorna o data
    const curiosidades = await buscarCuriosidade(); // retorna as curiosidades

    let usuarioFront = '';
   
    usuarios.forEach(usuario => {
        const curiosidadeUsuario = curiosidades.find(curiosidade => curiosidade.usuarioId === usuario.usuarioId);

        let qtdInteresses = 0;
        let qtdSentimentos = 0;
        let qtdValores = 0;

        // verificando se o usuário tem uma curiosidade
        if (curiosidadeUsuario) {
                qtdInteresses += curiosidadeUsuario.interesses.length;
                qtdSentimentos += curiosidadeUsuario.sentimentos.length;
                qtdValores += curiosidadeUsuario.valores.length;
        }
        
        let data = usuario.dataCadastro.substring(0, 10);
        let divisoes = data.split('-');
        let dataCriacao = `${divisoes[2]}/${divisoes[1]}/${divisoes[0]}`;

        usuarioFront += curiosidadeUsuario ? `<li>
                <article class="cardPerfil">
                    <div class="header">
                        <img class="foto" src="../../imgs/perfilPadrao.jpg" alt="foto-pedro">
                        <div class="contacts">
                            <div class="infos">
                                <p>${usuario.fatosDados.nome} | <i class="arroba">@${usuario.fatosDados.nomeUsuario}</i></p>
                                <p class="code">${usuario.codigo}</p>
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
                            <p><strong>${qtdValores}</strong> Valores <img class="iconF" src="../../icons/leaf.png" alt=""></p>
                        </div>
                        <div class="details">
                            <div class="databox">
                                <img class="iconD" src="../../icons/calendary.svg" alt="">
                                <p>Criado em: ${dataCriacao}</p>
                            </div>
                            <div class="complemento">
                                
                                <div class="sde">
                                    <button class="btnShare" data-id="${usuario.usuarioId}">
                                        <img class="iconC" src="../../icons/share.png" alt="">
                                    </button>
                                    <button class="btnDelete" data-id="${usuario.usuarioId}">
                                        <img class="iconC" src="../../icons/trash.png" alt="">
                                    </button>
                                    <button class="btnEdit" data-id="${usuario.usuarioId}">
                                        <img class="iconC" src="../../icons/pencil.png" alt="">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </li>` : `<li></li>`;
    });

    listaUsuarios.innerHTML = usuarioFront;

    document.querySelectorAll(".btnShare").forEach(btn => {
        btn.addEventListener('click', function () {
            const userId = this.dataset.id; // Recupera o ID do botão
            window.parent.postMessage({ action: 'openModal', userId: userId }, '*');
        });
    });

    document.querySelectorAll(".btnDelete").forEach(btn => {
        btn.addEventListener('click', function () {
            const curiosidade = curiosidades.find((curiosidade) => { 
                return curiosidade.usuarioId == this.dataset.id }); // Recupera o ID do botão
            window.parent.postMessage({ action: 'openDel', curiosidadeId: curiosidade ? curiosidade.id : null}, '*'); // Envia o ID
        });
    });

    document.querySelectorAll(".btnEdit").forEach(btn => {
        btn.addEventListener('click', function () {
            const userId = this.dataset.id; // Recupera o ID do botão
            console.log('teste', userId);
            window.parent.postMessage({ action: 'openEdit', curiosidadeId: userId }, '*');
        });
    });
}

window.onload = fetchUsuarios; // quando a janela carregar vai chamar esse método

const listaUsuarios = document.querySelector("#profiles");
