// ------ Declaracion de Variables ------
const textArea = document.querySelector('.text-area')
const mensaje = document.querySelector('.mensaje')

/**
 * ? La letra 'e' es convertida para 'enter'
 * ? La letra 'i' es convertida pra 'imes'
 * ? La letra 'a' es convertida para 'ai'
 * ? La letra 'o' es convertida para 'ober'
 * ? La letra 'u' es convertida para 'ufat'
 */

function encriptar(stringEncriptado) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ]

  stringEncriptado = stringEncriptado.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      )
    }
  }
  return stringEncriptado
}

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = ''
  mensaje.style.backgroundImage = 'none'
}

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ]

  stringDesencriptado = stringDesencriptado.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      )
    }
  }
  return stringDesencriptado
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = ''
  mensaje.style.backgroundImage = 'none'
}

function btnCopiar() {
  const contenido = document.querySelector('.mensaje')
  contenido.select()
  document.execCommand('copy')
  alert('Texto copiado al portapapeles')
  textArea.value = ''
  mensaje.style.backgroundImage = 'none'
}
