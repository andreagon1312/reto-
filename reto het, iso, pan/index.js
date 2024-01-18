
function isHeterograma(texto) {
    const lettersTexto = texto.split('');
    var comprobador = []
    for (i in lettersTexto) {
        if (comprobador.includes(lettersTexto[i])) {
            return false
        }
        comprobador.push(lettersTexto[i])
    }
    return true
}


function isPangrama(texto) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const lettersAlphabet = [...alphabet];
    const lettersTexto = texto.split('');
    for (i in lettersAlphabet) {
        if (!lettersTexto.includes(lettersAlphabet[i])) {
            return false
        }
    }
    return true
}


function isIstogram(texto) {
    const lettersTexto = texto.split('');
    var dict = {}

    for (i in lettersTexto) {
        if (!(lettersTexto[i] in dict)) {
            dict[lettersTexto[i]] = 1
        } else {
            dict[lettersTexto[i]] += 1
        }
    }
    var comprobador = '0'
    for (var key in dict) {
        if (comprobador == '0' || comprobador == String(dict[key])) {
            comprobador = String(dict[key])
        } else {
            return false
        }
    }
    return true
}

console.log(isHeterograma('amo')) 
console.log(isHeterograma('mama'))
console.log(isIstogram('ilsysi'))
console.log(isIstogram('papa'))
console.log(isPangrama('abcdefghijklmnopqrstuvwxyz'))
/console.log(isPangrama('nelson'))