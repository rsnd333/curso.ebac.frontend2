
const campoUm = document.getElementById("campo-b");
const campoDois = document.getElementById("campo-a");
let formEValido = false;

function correct(campoUm){
    return campoUm.length >=4;
}

function wrong(campoDois){
    return campoDois.length >=3;
}

formEValido = correct (campoUm)
    if (formEValido) {  
        const mensagemSucesso = `Parabéns o ${campoUm.value} é maior que o ${campoDois.value}`;     
        const valid = document.querySelector(".sucess-message");
        valid.innerHTML = mensagemSucesso;
        valid.style.display = "block";                                             
        campoUm.value = "";                                                       
        campoDois.value = "";

    } else { 
        campoUm.style.border = "3px solid red"
        document.querySelector(".error-message").style.display = "block";               
    }                                                                            

