const caracteresEspeciales = [
  '!',
  '@',
  '#',
  '$',
  '%',
  'ˆ',
  '&',
  '*',
  '-',
  '_',
  '+',
  '=',
  '?',
];

/**
 * Verifica si un string contiene letras mayusculas
 * @param {String}
 * @returns {boolean}
 */

export const contieneMayusculas = (contrasenia) =>
  contrasenia.split('').find((letra) => letra === letra.toUpperCase());

/**
 * Verifica si un string contiene letras minusculas
 * @param {String}
 * @returns {boolean}
 */
export const contieneMinusculas = (contrasenia) =>
  contrasenia.split('').find((letra) => letra === letra.toLowerCase());

/**
 * Verifica si un string contiene caracteres consecutivos
 * !No se tienen en cuenta si los caracteres son numeros o especiales
 * @param {String}
 * @returns {boolean}
 */
export const caracteresConsecutivos = (contrasenia) => {
  let verifCaracteresConsecutivos = false;

  contrasenia.split('').reduce((valorAnterior, valorActual) => {
    if (
      valorAnterior === valorActual &&
      !parseInt(valorActual) &&
      !caracteresEspeciales.includes(valorActual)
    ) {
      verifCaracteresConsecutivos = true;
    }
    return (valorAnterior = valorActual);
  }, '');

  return verifCaracteresConsecutivos;
};

/**
 * Verifica si un string contiene numeros consecutivos
 * @param {String}
 * @returns {boolean}
 */
export const numerosConsecutivos = (contrasenia) => {
  let verifNumerosConsecutivos = false;

  contrasenia.split('').reduce((valorAnterior, valorActual) => {
    if (valorAnterior === valorActual && parseInt(valorActual)) {
      verifNumerosConsecutivos = true;
    }
    return (valorAnterior = valorActual);
  }, '');

  return verifNumerosConsecutivos;
};

/**
 * Verifica cuantos numeros tiene el string
 * @param {String}
 * @returns {boolean}
 */
export const cantidadNumeros = (contrasenia) => {
  let cantidadNumeros = 0;
  contrasenia.split('').forEach(function (item) {
    if (parseInt(item)) cantidadNumeros += 1;
  });
  return cantidadNumeros;
};

/**
 * Verifica la longitud de un string
 * @param {String}
 * @returns {boolean}
 */
export const longitudContrasenia = (contrasenia) =>
  contrasenia.split('').length;

/**
 * Verifica si un string cumple con las condiciones de caracteres especiales
 * @param {String}
 * @returns {boolean}
 */
export const verificarCaracteresEspeciales = (contrasenia) => {
  const contraseniaArray = contrasenia.split('');

  //* verificar que incluya almenos dos caracteres especiales
  const caracteresEspecialesEncontrados = contraseniaArray.reduce(
    (valorAnterior, valorActual) => {
      if (caracteresEspeciales.includes(valorActual)) {
        return (valorAnterior += 1);
      }
      return valorAnterior;
    },
    0
  );

  if (caracteresEspecialesEncontrados < 2) {
    return false;
  }

  //* ninguno de ellos puede repetirse en ninguna posición
  const letras = {};
  for (const letra of contrasenia) {
    if (caracteresEspeciales.includes(letra)) {
      letras[letra] = (letras[letra] || 0) + 1;
    }
  }
  const resultCaracteresDuplicados = Object.entries(letras)
    .filter((letra) => letra[1] > 1)
    .map((letra) => letra[0]);

  if (resultCaracteresDuplicados.length > 0) {
    return false;
  }

  //* caracteres no pueden estar juntos
  let verifCaracteresJuntos = false;

  contraseniaArray.reduce((valorAnterior, valorActual) => {
    if (
      caracteresEspeciales.includes(valorAnterior) &&
      caracteresEspeciales.includes(valorActual)
    ) {
      verifCaracteresJuntos = true;
    }
    return (valorAnterior = valorActual);
  }, '');

  if (verifCaracteresJuntos) return false;

  return true;
};

/**
 * Verifica si un string contiene ceros
 * @param {String}
 * @returns {boolean}
 */
export const verificarContieneCero = (contrasenia) => contrasenia.includes('0');

/**
 * Verifica si un string contiene espacios en blanco
 * @param {String}
 * @returns {boolean}
 */
export const verificarContieneEspacios = (contrasenia) =>
  contrasenia.indexOf(' ') >= 0;

/**
 * Se encarga de reemplazar las clases css al input enviado por parametro
 * @param {Object}
 * @param {String}
 * @returns {void}
 */
export const reemplazarClassCss = (input, claseCss) => {
  input.className = claseCss;
};
