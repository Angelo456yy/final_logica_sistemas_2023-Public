function boton1() {
    var primer_numero = document.getElementById("primer_numero").value;
    var segundo_numero = document.getElementById("segundo_numero").value;
    var tercer_numero = document.getElementById("tercer_numero").value;

if(primer_numero >= tercer_numero){

    var resultado = parseInt(primer_numero) * parseInt(tercer_numero) * parseInt(segundo_numero);

   document.getElementById("resultado").value = resultado;

}

if(primer_numero = segundo_numero){

    var resultado = parseInt(primer_numero) + parseInt(segundo_numero) + parseInt(tercer_numero);

   document.getElementById("resultado").value = resultado;
    

}

}

function boton2(){
    let primer_numero
    let segundo_numero
    let tercer_numero
    let concatenacion = primer_numero + segundo_numero + tercer_numero;
    console.log(concatenacion); 

}

