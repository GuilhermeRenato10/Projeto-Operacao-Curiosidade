import { criarUsuario, updateUsuario, buscarUsuarios, filtrarBusca, buscarUsuarioById, deletarUsuario } from "../services/serviceUsuarios.js";

const createUser = document.querySelector('#buttonUser');
const modal = document.querySelector('.modal');
const listaUsuarios = document.querySelector('#overflow');

/* Constantes drop details */
const containerFrame = document.querySelector('#frameCad');
const limparFiltro = document.querySelectorAll('.equal')[0];
const filtrarPesquisa = document.querySelectorAll('.equal')[1];
const status = document.querySelector('#status');
const tipo = document.querySelector('#tipo');
const codigo = document.querySelector('#code');
const periodo = document.querySelector('#period');

limparFiltro.addEventListener('click', function () {
    fetchUsuarios();
})

function verificarStatus() {
    switch (status.value) {
        case 'atv':
            return true;
        case 'inv':
            return false;
        default:
            return null;
    }
}

function verificarTipo() {
    if (tipo.value === "adm") { return true } else if (tipo.value === 'op') {
        return false;
    } else {
        return null;
    }
}

filtrarPesquisa.addEventListener('click', async function (event) {
    event.preventDefault();
    const statusValor = verificarStatus();
    const tipoValor = verificarTipo();
    const codigoValor = codigo.value ? codigo.value : null;
    const periodoValor = periodo.value ? periodo.value : null;

    const usuarios = await filtrarBusca(statusValor, tipoValor, codigoValor, periodoValor);
    console.log(usuarios);
    setupEvents(usuarios);
}
)

function setupEvents(usuarios) {
    let usuarioHTML = '';

    usuarios.forEach(usuario => {
        let data = usuario.dataCadastro.substring(0, 10);
        let divisoes = data.split('-');
        let dataCriacao = `${divisoes[2]}/${divisoes[1]}/${divisoes[0]}`;

        const statusUsuario = usuario.ativo ? 'Ativo' : 'Inativo';
        const tipoUsuario = usuario.tipo ? 'Administrador' : 'Operador';

        usuarioHTML += `<li>
               <div class="gerenciamento" data-id="${usuario.usuarioId}">
                        <input class="checks" type="checkbox" name="check" id="check1">
                        <p class="codeColumn">${usuario.codigo}</p>
                        <p class="nameColumn">${usuario.fatosDados.nome}</p>
                        <p class="emailColumn">${usuario.fatosDados.email}</p>
                        <p class="dateColumn">${dataCriacao}</p>
                        <p class="${usuario.ativo ? 'statusLayout1' : 'statusLayoutRed'}">${statusUsuario}</p>
                        <p id="operator2" class="typeColumn">${tipoUsuario}</p>
                        <div class="dropButton">
                            <button class="details"><img class="imgTp" src="../icons/tpwhite.svg" alt="">Detalhes
                            </button>
                            <ul class="options">
                                <li id="altDrop" class="styleOptions">Alterar<img class="sizeImgDrop" src="../icons/pencilW.svg" alt=""></li>
                                <li id="shareDrop" class="styleOptions">Compartilhar<img class="sizeImgDrop" src="../icons/keyboardp.svg" alt=""></li>
                                <li id="removeDrop" class="${usuario.ativo ? 'removeDrop' : 'ativarDrop'} styleOptions">${usuario.ativo ? 'Inativar' : 'Ativar'}<img class="sizeImgDrop" src="${usuario.ativo ? '../icons/remove.svg' : '../icons/ativarUser.svg'}" alt=""></li>
                                <li id="apagarUser">Excluir Usuário</li>
                            </ul>
                        </div>
                    </div>
            </li>`;
    });
    listaUsuarios.innerHTML = usuarioHTML;

    const listaOptions = document.querySelectorAll('.options');
    const computedStyle = getComputedStyle(containerFrame);
    const habilitar = document.querySelectorAll('.statusLayoutRed');

    document.querySelectorAll(".details").forEach((btn, index) => {
        btn.addEventListener('click', function () {
            listaOptions[index].style.display = 'block';
            listaOptions[index].style.zIndex = 10;
            modal.style.display = 'flex';
        });
    })

    document.querySelectorAll('.statusLayoutRed').forEach(status => {
        status.addEventListener('click', function () {
            modal.style.display = 'flex';
            containerFrame.src = '../componentes/ativarCad/ativar.html';
            containerFrame.width = 450;
            containerFrame.height = 200;
            containerFrame.style.display = 'flex';
            listaOptions.forEach(listaOption => {
                listaOption.style.zIndex = "1";
            })
        })
    })

    document.querySelectorAll('#apagarUser').forEach(btnApagarUser => {
        btnApagarUser.addEventListener('click', async function () {
            const gerenciamentoDiv = this.closest('.gerenciamento');
            localStorage.setItem('usuarioId', gerenciamentoDiv.dataset.id);
            await deletarUsuario(localStorage.getItem('usuarioId'));
            console.log('Usuário removido.');
            location.reload();
        })
    })

    document.querySelectorAll('.statusLayout1').forEach(status => {
        status.addEventListener('click', function () {
            modal.style.display = 'flex';
            containerFrame.src = '../componentes/inativarUser/disable.html';
            containerFrame.width = 450;
            containerFrame.height = 200;
            containerFrame.style.display = 'flex';
            listaOptions.forEach(listaOption => {
                listaOption.style.zIndex = "1";
            })
        })
    })

    document.querySelectorAll('#altDrop').forEach(editUser => {
        editUser.addEventListener('click', function () {
            modal.style.display = 'flex';
            containerFrame.style.display = 'flex';
            listaOptions.forEach(listaOption => {
                listaOption.style.zIndex = "1";
            })
            containerFrame.src = '../componentes/editUser/editUser.html';
            containerFrame.width = 820;
            containerFrame.height = 640;
            console.log(this.dataset.id);
            const gerenciamentoDiv = this.closest('.gerenciamento');
            localStorage.setItem('usuarioId', gerenciamentoDiv.dataset.id);
        })
    })

    document.querySelectorAll('#shareDrop').forEach(shareUser => {
        shareUser.addEventListener('click', function () {
            modal.style.display = 'flex';
            containerFrame.style.display = 'flex';
            listaOptions.forEach(listaOption => {
                listaOption.style.zIndex = "1";
            })
            containerFrame.src = '../componentes/defshare/defshare.html';
            containerFrame.width = 450;
            containerFrame.height = 450;
        })
    })

    document.querySelectorAll('#removeDrop').forEach(disableUser => {
        disableUser.addEventListener('click', async function () {
            const gerenciamentoDiv = this.closest('.gerenciamento');
            localStorage.setItem('usuarioId', gerenciamentoDiv.dataset.id);
            const usuario = await buscarUsuarioById(localStorage.getItem('usuarioId'));
            console.log(localStorage.getItem);
            modal.style.display = 'flex';
            containerFrame.src = usuario.ativo ? '../componentes/inativarUser/disable.html' : '../componentes/ativarUser/enable.html';
            containerFrame.width = 450;
            containerFrame.height = 200;
            containerFrame.style.display = 'flex';
            listaOptions.forEach(listaOption => {
                listaOption.style.zIndex = "1";
            })
        })
    })

    window.addEventListener('message', async function (event) {
        const { action, novoUsuario } = event.data;
        if (action === 'salvarCad') {
            containerFrame.style.display = "none";
            modal.style.display = "none";
            criarUsuario(novoUsuario);
        } else if (action === 'fecharCad') {
            containerFrame.style.display = "none";
            modal.style.display = "none";
            listaOptions.forEach(listaOption => {
                listaOption.style.zIndex = "10";
            })
        } else if (action === 'editCad') {
            containerFrame.style.display = "none";
            modal.style.display = "none";
            listaOptions.forEach(listaOption => {
                listaOption.style.zIndex = "10";
                listaOption.style.display = "none";
            })
            updateUsuario(this.localStorage.getItem('usuarioId'), novoUsuario);
        } else if (event.data === 'fecharEditCad') {
            computedStyle.display = "none";
            modal.style.display = "none";
            listaOptions.forEach(listaOption => {
                listaOption.style.zIndex = "10";
                listaOption.style.display = "none";
            })
        } else if (event.data === 'fecharJanela') {
            containerFrame.style.display = "none";
            modal.style.display = "none";
            listaOptions.forEach(listaOption => {
                listaOption.style.zIndex = "10";
                listaOption.style.display = "none";
            })
        } else if (event.data === 'cancelarDel') {
            containerFrame.style.display = "none";
            modal.style.display = "none";
            listaOptions.forEach(listaOption => {
                listaOption.style.zIndex = "10";
                listaOption.style.display = "none";
            })
        } else if (action === 'habilitar') {
            containerFrame.style.display = "none";
            modal.style.display = "none";
            listaOptions.forEach(listaOption => {
                listaOption.style.display = "none";
            })
            location.reload();
        } else if (action === 'desabilitar') {
            containerFrame.style.display = "none";
            modal.style.display = "none";
            listaOptions.forEach(listaOption => {
                listaOption.style.display = "none";
            })
            location.reload();
        } else if (action === 'cancelarAtivacao') {
            containerFrame.style.display = "none";
            modal.style.display = "none";
            listaOptions.forEach(listaOption => {
                listaOption.style.zIndex = "10";
                listaOption.style.display = "none";
            })
        }
    })

    window.onclick = function (event) {
        if (event.target == modal) {
            console.log('event target');
            console.log(containerFrame.style);
            if (computedStyle.display === "flex") {
                console.log('primeiro if');
                containerFrame.style.display = "none";
                listaOptions.forEach(listaOption => {
                    listaOption.style.zIndex = "10";
                })
                listaOptions.forEach(listaOption => {
                    if (listaOption.style.display === "none") {
                        console.log('segundo if')
                        modal.style.display = "none";
                    }
                })
            } else if (computedStyle.display === "none") {
                console.log('else if');
                modal.style.display = "none";
                listaOptions.forEach(listaOption => {
                    listaOption.style.display = "none";
                })
            }
        }
    }
}

createUser.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = 'flex';
    containerFrame.style.display = 'flex';
    containerFrame.src = '../componentes/cadUser/cadUser.html';
    containerFrame.width = 820;
    containerFrame.height = 640;
})

async function fetchUsuarios() {
    const usuarios = await buscarUsuarios();

    setupEvents(usuarios);
}

fetchUsuarios();


