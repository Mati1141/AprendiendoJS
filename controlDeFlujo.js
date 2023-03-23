var destino = 'Brasil'
var destino = 'Argentina'
var destino = 'EEUU'

if (destino === 'Brasil'){
    console.log("Gire a la izquierda")
}


else if (destino === 'Argentina'){
    console.log("Gire a la derecha")
}


else{
    console.log("estamos perdidos")
}

// funcion: PARA SACAR LICENCIA DE CONDUCIR

var SacarLicenciaDeConducir = (Edad) => {
    if ( Edad == 18){
        console.log("Podes sacar la licencia")
    }

    else if ( Edad < 18 && Edad == 17){
        console.log("Y mira podes manejar pero con permiso de tus padres")
    }

    else{
        console.log("NO PODES MANEJAR FLACO")
    }
}

SacarLicenciaDeConducir(16);