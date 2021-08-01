/* 
Equipo 15
Conformado por: 
Ana Cristina Castillo Escobar
Antonio Castillo
Emmanuel Eduardo
Javier Tapia 

*/

//Ejercicio #1
/*Deep Equal:
Escribir una función llamada deepEqual que reciba dos argumentos y retorne true si son el mismo valor o si son objetos con las mismas propiedades, 
en este último caso los valores de las propiedades deben ser comparados con una llamada recursiva de deepEqual.

Usando el operador typeof puedes determinar si ambas variables son objetos, de ser así se debe llamar nuevamente deepEqual 
para comparar las propiedades de dichos objetos, en caso contrario solo es necesario revisar si ambas variables son estrictamente iguales.

La función Object.keys() es útil para obtener las propiedades de los objetos
*/

function deepEqual(a, b) {
    if (typeof a && typeof b === "object") { //si los dos son objetos...
        if (Object.keys(a).length == Object.keys(b).length) { // a y b deben tener la misma cantidad de propiedades
            for (prop in a) {
                if (prop in b) { // Cada llave de a debe estar en b
                    if (deepEqual(a[prop], b[prop]) === false) { // Con un valor distinto, ya son diferentes objetos 
                        return false
                    }
                } else {
                    return false
                }
            }
​
            return true  // Si termina el ciclo es que todas las propiedades son iguales
        } else {
            return false
        }
    } else if (a === b) { //si son el mismo valor
        return true
    } else {
        return false
    }
}
var john = {
    firstName: 'John',
    lastName: 'Doe'
}
var mark = {
    firstName: "10",
    lastName: 13
}
​
// Diferentes tipos
console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
​
// Diferentes valores
console.log('Test 3:', deepEqual('2', '1')) // false
console.log('Test 4:', deepEqual(41, 3)) // false
​
// Objetos idénticos
console.log('Test 5:', deepEqual(john, john)) // true
console.log('Test 6:', deepEqual(john, {firstName: 'John',lastName: 'Doe'})) // true
​
// Objetos distintos
console.log('Test 7:', deepEqual(john, mark)) // false
console.log('Test 8:', deepEqual(john, {firstName: 'John'})) // false


//Ejercio #2
/*Chunk:
Escribir una función chunk que recibe un arreglo y un número entero size. La función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.*/

function chunk(array, size) {
    const newArray = []
    let subArray = []  // se declara let y no const porque estará en limpieza continua
​
    for (let i = 0; i <= array.length; i++) {  //recorre los elementos del array
        if (subArray.length === size || i === array.length) {  // Si el subArray es del tamaño requerido o es la última iteración
            newArray.push(subArray) //agrega al newarray el contenido del subarray
            subArray = [] //limpia el contenido del subarray
        }
        subArray.push(array[i])  //pase lo que pase, siempre agrega el valor de la posicion actual del array al subarray
    }
    return newArray  
}
​
const data = [1, 2, 3, 4, 5, 6, 7, 8]
​
console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]] 
console.log('Test 4:', chunk(data, 4)) // [[1, 2, 3, 4], [5, 6, 7, 8]] 
console.log('Test 5:', chunk(data, 5)) // [[1, 2, 3, 4, 5], [6, 7, 8]]
console.log('Test 5:', chunk(data, 10)) // [[1, 2, 3, 4, 5, 6, 7, 8]]


//Ejercicio #3
/*Frequency:
Escribir una función frequency que recibe un string como argumento. Esta función debe contar la frecuencia o el número de veces que se repite cada carácter.
El resultado debe mostrarse en un objeto donde las propiedades sean los caracteres, y los valores sean la frecuencia. 
Los resultados deben ordenarse de manera ascendente por los caracteres y no la frecuencia.*/

function frequency(string) {
    // Contamos la frecuencia de los caracteres y guardamos en un objeto
    const counterObject = {}
​
    for (let i = 0; i < string.length; i++) {
        currentChar = string[i]
​
        if (counterObject[currentChar]) counterObject[currentChar]++
        else counterObject[currentChar] = 1
    }
​
    // Ordenamos alfabeticamente y guardamos en un nuevo objeto
    const orderedKeys = Object.keys(counterObject).sort()
    const orderedObject = {}
​
    for (key of orderedKeys) {
        orderedObject[key] = counterObject[key]
    }
​
    return orderedObject
}
​
console.log('Test 1:', frequency('cccbbbaaa')) // {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org')) // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com')) // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
console.log('Test 4:', frequency('94893475690586')) // { '0': 1, '3': 1, '4': 2, '5': 2, '6': 2, '7': 1, '8': 2, '9': 3 }
console.log('Test 5:', frequency('9489ssssoo8$6iio///vvvvvv&&')) // { '4': 1, '6': 1, '8': 2, '9': 2, '$': 1, '&': 2, '/': 3, i: 2, o: 3, s: 4, v: 6 }