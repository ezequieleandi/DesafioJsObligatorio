let nombre
let apellido
function nombreCompleto(){
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
}
nombreCompleto();
while (nombre == "" || apellido == ""){
    alert("No ingreso nombre o apellido")
    nombreCompleto()
}
let telefono
let consulta
let correo
let decision = prompt("Bienvenido a Barronativo " + nombre + " " + apellido + " ¿Desea comprar o consultar?").toLowerCase();

function saludoCierre(){
    alert("Muchas gracias por enviar la consulta " + nombre + "\nDentro de las 24, 48hs nos contactaremos con usted al telefono: " + telefono + "\nSu consulta fue: " + consulta)
    alert("Consulta enviada")
}

function recibirPromociones(){
    let promociones = prompt("¿Quiere recibir novedades o promociones de Barronativo?").toLowerCase();
    if(promociones == "si"){
        correo = prompt("Ingrese correo electronico");
        saludoCierre();
    }else if(promociones == "no"){
        saludoCierre();
    }
}

function consultar(){
    telefono = prompt(nombre + ", ingrese su celular para poder contactarnos");
    consulta = prompt("Ingrese la consulta");
    recibirPromociones()
}

if (decision == "comprar"){
    let noStock = prompt("Lo sentimos " + nombre + "\nEn este momento no tenemos stock" + "\nElija opcion numerica:" + "\n1.consultar \n2.finalizar");

    switch (noStock){
        case "1":
            consultar();
            break;
        case "2":
            alert("Muchas gracias " + nombre + " por entender.")
    }
}else{
    consultar();
}
