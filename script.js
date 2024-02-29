let plainTextFinal = '';
let cipherTextFinal = '';

function hideOutputText() {
    document.getElementById("botao-output").style.display = "";
    document.getElementById("textoResultado").removeAttribute("hidden");
    document.getElementById("imagem").style.display = "none";
    document.getElementById("titulo").style.display = "none";
    document.getElementById("paragrafo").style.display = "none";
}


function exibeMensagem(mensagem) { 
    document.getElementById("textoResultado").innerHTML = mensagem;
}

function botaoLimparTexto() {
    document.getElementById("imagem").style.display = "";
    document.getElementById("titulo").style.display = "";
    document.getElementById("paragrafo").style.display = "";
    document.getElementById("textoResultado").hidden = true;
    document.getElementById("textoResultado").innerHTML = "";
    document.getElementById("botao-output").style.display = "none";
    document.getElementById("texto-entrada").value = "";
}

function botaoCopiarTexto() {
    if (plainTextFinal == "") {
        navigator.clipboard.writeText(cipherTextFinal); 
    } else {
        navigator.clipboard.writeText(plainTextFinal); 
    }
    alert("Texto copiado para a área de transferência!");
}

function codificarTexto() { // Funcao codificar - Analisa letra por letra e troca as vogais pelo codigo correspondente
    let plainText = document.getElementById('texto-entrada').value;
    let plainTextArray = Array.from(plainText);
    let textoEntrada = document.getElementById("texto-entrada").value
    plainTextFinal = "";
    cipherTextFinal = "";

    if (textoEntrada == "") {
        alert(" Digite o texto para ser criptografado ou descriptografado!")
    } else {
        for (let i = 0; i < plainTextArray.length; i++) {
            if (plainTextArray[i] == 'a') {
                plainTextFinal = plainTextFinal.concat('ai');
                } else if (plainTextArray[i] == 'e') {
                plainTextFinal = plainTextFinal.concat('enter');
                } else if (plainTextArray[i] == 'i') {
                    plainTextFinal = plainTextFinal.concat('imes');
                } else if (plainTextArray[i] == 'o') {
                    plainTextFinal = plainTextFinal.concat('ober');
                } else if (plainTextArray[i] == 'u') {
                    plainTextFinal = plainTextFinal.concat('ufat');
                } else {
                    plainTextFinal = plainTextFinal.concat(plainTextArray[i]);
                }          
            }
            hideOutputText();            
            exibeMensagem(plainTextFinal);
        }
}

function decodificarTexto() { // Funcao decodificar - Usa o metodo replace() para trocar a parte codificada do texto para a vogal correspondente
    let cipherText = document.getElementById('texto-entrada').value;
    let textoEntrada = document.getElementById("texto-entrada").value
    cipherTextFinal = "";
    plainTextFinal = "";

    if (textoEntrada == "") {
        alert(" Digite o texto para ser criptografado ou descriptografado!")
        } else {
   
            cipherTextFinal = cipherText.replace(/ai/ig, 'a').replace(/enter/ig, 'e').replace(/imes/ig, 'i').replace(/ober/ig, 'o').replace(/ufat/ig, 'u');
            
            hideOutputText();
            exibeMensagem(cipherTextFinal);
        }
}
