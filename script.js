var inputEntrada = document.querySelector('#text-input');
var inputSaida = document.querySelector('#text-output');
var areaConteudoVazio = document.querySelector('.result-vazio');
var areaConteudoOK = document.querySelector('.result-ok');

areaConteudoVazio.style.display = 'block'
areaConteudoOK.style.display = 'none'

function btnCri() {
    const txtEncri = criptografar(inputEntrada.value);
    inputSaida.value = txtEncri;
    areaConteudoVazio.style.display = 'none'
    areaConteudoOK.style.display = 'block'
}

function criptografar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["aimes", "ai"]]; 
    stringEncriptada = stringEncriptada.toLowerCase();

    for (i = 0 ; i < matrizCodigo.length ; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDescri() {
    const txtDescri = descriptografar(inputEntrada.value);
    inputSaida.value = txtDescri;
    areaConteudoVazio.style.display = 'none'
    areaConteudoOK.style.display = 'block'
}

function descriptografar(stringDescriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for (i = 0 ; i < matrizCodigo.length ; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptada;
}

function copiarTexto() {
    inputSaida.select();
    inputSaida.setSelectionRange(0, 99999);
    document.execCommand("copy");
}