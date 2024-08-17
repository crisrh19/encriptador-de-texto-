const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".texto__resultado");
const informacionTextoResultado = document.querySelector(".informacion-2");
const botonCopiar = document.querySelector(".copiar"); 
const areaConTexto =document.querySelector(".area-desencriptar")


function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    if (textoEncriptado==""){
        alert("favor de ingresar texto para encriptar ")
    }else{
    mensaje.value = textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage ="none";
    informacionTextoResultado.style.display="none";
    botonCopiar.style.display="block";
    areaConTexto.classList.add("area-con-texto");
}
}
function encriptar (stringEncriptada){

    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
    
}
function botonDesncriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    if (textoEncriptado==""){
        alert("favor de ingresar texto para desencriptar ")
    }else{
    mensaje.value = textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage ="none";
    informacionTextoResultado.style.display="none";
    botonCopiar.style.display="block";
    areaConTexto.classList.add("area-con-texto");
   
    }
}
function desencriptar (stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


    botonCopiar.addEventListener("click", () =>{  
    let texto = mensaje;
    navigator.clipboard.writeText(texto.value);

    alert("el mensaje fue copiado con exito =)");
    mensaje.value="";
   
    informacionTextoResultado.style.display="block";
    botonCopiar.style.display="none";
    areaConTexto.classList.add("area-con-texto");
    })



