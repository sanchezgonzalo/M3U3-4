

const num1= parseInt(prompt('ingrese el primer número:')); 
const num2= parseInt(prompt('ingrese el segundo número:'));
const num3= parseInt(prompt('ingrese el tercer número:'));
// const num4= parseInt(prompt('ingrese el cuarto número:', ''));
// const num5= parseInt(prompt('ingrese el quinto número:', ''));
let numeros =[num1,num2,num3]
let masGrande = 0;
for(let i = 0; i<numeros.length; i++) {
    if (numeros[i]>masGrande){masGrande=numeros[i];}
}
document.write(`el mayor es ${masGrande}`) 
// if(num1>num2 && num1>num3 ){document.write (`el mayor es el ${num1}`)}
// else if( num2 > num3 ){document.write(`el mayor es ${num2}`)}
// else{document.write(`el mayor es ${num3}`)}





// let distancia= parseInt(prompt('Ingrese la distancia de viaje en metros.',''));

// if(distancia<1000){document.write("Camina.")}
// else if(distancia<10000&&distancia>1001){document.write("Utiliza la bicicleta.")}
// else if(distancia<30000&&distancia>10001){document.write("Utiliza el transporte público.")}
// else if(distancia<100000&&distancia>30001){document.write("Utiliza el automóvil.")}
// else {document.write("Viaja en avión.")}


// const nombre = prompt('Ingrese nombre:', '');
// 		const nota = parseInt(prompt('Ingrese su nota:', ''));
		
// 		// Number.isNaN valida que sea un valor numerico
// 		if (Number.isNaN(nota)) {
// 			document.write(`La nota ingresada no es válida`);
// 		} else if (nota >= 4) {
// 			document.write(`${nombre} esta aprobado con un ${nota}`);
// 		} else{
// 			document.write(`${nombre} NO esta aprobado con un ${nota}`);
// 		}
