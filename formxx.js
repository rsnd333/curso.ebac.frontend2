

const form = document.getElementById("form-campos");

form.addEventListener ("submit", function(e){
    e.preventDefault();

    const campoB = document.getElementById("campo-b").value;

    const campoA = document.getElementById("campo-a").value;
    
if(Number(campoA) > Number(campoB)){
    alert("Inválido");
}else{
    alert("Válido")
}
});


