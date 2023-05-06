const lampada = document.getElementById('lampada');
const btnLigar = document.getElementById('ligar');
const btnDesligar = document.getElementById('desligar');
const btnQuebrar = document.getElementById('quebrar');

function ligarLampada() {
  lampada.src = "images/lamp_on.jpg";
}

function desligarLampada() {
  lampada.src = "images/lamp_off.jpg";
}

function quebrarLampada() {
  lampada.src = "images/lamp_broken.jpg";
  btnLigar.disabled = true;
  btnDesligar.disabled = true;
  btnQuebrar.disabled = true;
}

function restaurarBotoes() {
  btnLigar.disabled = false;
  btnDesligar.disabled = false;
  btnQuebrar.disabled = false;
}

btnLigar.addEventListener('click', ligarLampada);
btnDesligar.addEventListener('click', desligarLampada);
btnQuebrar.addEventListener('click', quebrarLampada);
lampada.addEventListener('click', restaurarBotoes);
