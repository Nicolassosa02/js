//Funcion 
function opcionValida(opciones){

    while(isNaN(opciones) || opciones < 0 || opciones >3){
        alert("Opcion invalida");
        opcion = parseInt(prompt(opciones))
    }
    if(opcion === 0){
        alert("Gracias por visitarnos");

        return false;
    }
    return true
}

//Inicio del programa

alert ("Bienvenido a NETSOSA")
const opciones = "¿Qué esta buscando? 1- Crear mi pagina web 2- Un Community Manager 3- Solo informarme 0- Salir"

let opcion =parseInt(prompt(opciones))
/*
const caso1 = 
const caso2 = 
const caso3 = 
*/
while (opcionValida(opcion)){

    switch(opcion){

        case 1:
            alert ("Haz llegado al lugar correcto")
            break;
            

        case 2:
            alert ("Te Invito a que visites nuestro otro sitio web dedicado solamente a CM")
            break;


        case 3:
            alert ("Espero que todo lo que leas te sea util para tu busqueda")
            break;
    }

    
}
