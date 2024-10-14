import { validarUsuario, verificacaoSenhaUsuario } from "../Utils/Validators.js";
import { buscarUsuarioByEmail } from "../services/serviceUsuarios.js";


$(document).ready(function () {
  $('.autoplay').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

const userInput = document.querySelector('#user');
const passwordInput = document.querySelector('#pass');
const form = document.querySelector('#login');

async function validarLogin(event) {
  event.preventDefault();

  if (validarUsuario(userInput, passwordInput)) {
      const usuario = await buscarUsuarioByEmail(userInput.value);
      if(verificacaoSenhaUsuario(passwordInput, usuario.senha)){
        window.location.href = '../home-principal/indexhome.html';
        localStorage.setItem('authUsuarioId', usuario.usuarioId);
      }
    } 
}

form.addEventListener('submit', validarLogin);
