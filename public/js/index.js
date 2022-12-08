'use strict';
import {
  longitudContrasenia,
  contieneMayusculas,
  contieneMinusculas,
  caracteresConsecutivos,
  cantidadNumeros,
  numerosConsecutivos,
  verificarCaracteresEspeciales,
  verificarContieneCero,
  verificarContieneEspacios,
  reemplazarClassCss,
} from './helpers.js';

const inputContrasenia = document.getElementById('inputContrasenia');
const alertaCaracteres = document.getElementById('alertaCaracteres');

const alertaMinusculasMayusculas = document.getElementById(
  'alertaMinusculasMayusculas'
);
const alertaLetrasConsecutivas = document.getElementById(
  'alertaLetrasConsecutivas'
);
const alertaNumerosMinimos = document.getElementById('alertaNumerosMinimos');
const alertaNumerosIguales = document.getElementById('alertaNumerosIguales');
const alertaCaracteresEspeciales = document.getElementById(
  'alertaCaracteresEspeciales'
);
const alertaUsoCero = document.getElementById('alertaUsoCero');
const alertaUsoEspacios = document.getElementById('alertaUsoEspacios');
const btnEnviar = document.getElementById('btnEnviar');

document.addEventListener('DOMContentLoaded', function () {
  inputContrasenia.addEventListener('keyup', verificarContrasenia);
});

const verificarContrasenia = (e) => {
  const contrasenia = e.target.value;
  btnEnviar.disabled = true;

  // Debe tener al menos 16 caracteres.
  if (longitudContrasenia(contrasenia) < 16) {
    reemplazarClassCss(alertaCaracteres, 'fas fa-times text-danger');
    return;
  }
  reemplazarClassCss(alertaCaracteres, 'fas fa-check text-success');

  // Debe tener letras minúsculas y mayúsculas.
  if (!contieneMayusculas(contrasenia) || !contieneMinusculas(contrasenia)) {
    reemplazarClassCss(alertaMinusculasMayusculas, 'fas fa-times text-danger');
    return;
  }
  reemplazarClassCss(alertaMinusculasMayusculas, 'fas fa-check text-success');

  // No puede tener 2 letras iguales consecutivas.
  if (caracteresConsecutivos(contrasenia)) {
    reemplazarClassCss(alertaLetrasConsecutivas, 'fas fa-times text-danger');
    return;
  }
  reemplazarClassCss(alertaLetrasConsecutivas, 'fas fa-check text-success');

  // Debe contener al menos 4 números.
  if (cantidadNumeros(contrasenia) < 4) {
    reemplazarClassCss(alertaNumerosMinimos, 'fas fa-times text-danger');
    return;
  }
  reemplazarClassCss(alertaNumerosMinimos, 'fas fa-check text-success');

  // No puede tener 2 números iguales consecutivos.
  if (numerosConsecutivos(contrasenia)) {
    reemplazarClassCss(alertaNumerosIguales, 'fas fa-times text-danger');
    return;
  }
  reemplazarClassCss(alertaNumerosIguales, 'fas fa-check text-success');

  // Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de
  // ellos puede repetirse en ninguna posición y además los caracteres no pueden
  // estar juntos.

  if (!verificarCaracteresEspeciales(contrasenia)) {
    reemplazarClassCss(alertaCaracteresEspeciales, 'fas fa-times text-danger');
    return;
  }
  reemplazarClassCss(alertaCaracteresEspeciales, 'fas fa-check text-success');

  // No se puede usar el número 0.

  if (verificarContieneCero(contrasenia)) {
    reemplazarClassCss(alertaUsoCero, 'fas fa-times text-danger');
    return;
  }
  reemplazarClassCss(alertaUsoCero, 'fas fa-check text-success');

  // No se puede colocar espacios.

  if (verificarContieneEspacios(contrasenia)) {
    reemplazarClassCss(alertaUsoEspacios, 'fas fa-times text-danger');
    return;
  }
  reemplazarClassCss(alertaUsoEspacios, 'fas fa-check text-success');

  btnEnviar.disabled = false;
};
