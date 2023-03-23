
// Math.pow sirve para potenciar un numero Math.pow(x , y);

var potenciacion = Math.pow(3 , 3);
console.log(potenciacion);

// redondear numeros con math.round : Math.round redondeará el número decimal al entero más próximo. 
//Es decir que, si tenemos 0.49, el resultado será 0. En cambio, si tenemos 0.50, el resultado será 1.

var redondear1 = Math.round(0.10)
console.log(redondear1)

var redondear2 = Math.round(0.50)
console.log(redondear2)


//Math.floor redondeará el número decimal al entero de menor valor. Por ejemplo, si tenemos el número 5.93, el resultado será 5.

var redondearFloor = Math.floor(0.90)
console.log(redondearFloor)

//Math.ceil este método, al contrario que el anterior, redondeará un número al siguiente entero. Por ejemplo, si tenemos 3.27 el resultado será 4.

var redondearCeil = Math.ceil(0.10)
console.log(redondearCeil)


// Math max y Math min

var mathmin = Math.min(1,2,3,4,5)
console.log(mathmin)

var mathmax = Math.max(1,2,3,4,5)
console.log(mathmax)

var numeroRandom = Math.random()
console.log(numeroRandom)

//Math.random Este último método nos permitirá generar un número aleatorio. 
//Es importante tener en cuenta que el número que se generará es decimal, y puede ser cualquiera entre el 0 y el 1.