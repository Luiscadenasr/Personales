/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética


let a=3
let b=4

/* console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División
console.log(a % b) // Módulo
console.log(a ** b) // Exponente
 */


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let myVariable=14

myVariable += 3  // Suma con asignación
    console.log(myVariable)
myVariable -= 3 // Resta con asignación
    console.log(myVariable)
myVariable *= 3 // Multiplicación con asignación
    console.log(myVariable)
myVariable /= 3 // División con asignación
    console.log(myVariable)
myVariable %= 3 // Módulo con asignación
    console.log(myVariable)
myVariable **= 3   // Exponente con asignación
    console.log(myVariable)


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de 


console.log(a<b) // Mayor que
console.log(a<=b) // Mayor o igual que
console.log(a==3) // Igualdad por valor
console.log(a==a) // Igualdad por valor
console.log(a===a) // Igualdad por identidad (por tipo y valor) o igualdad estricta



// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(!(a<b)) // Mayor que
console.log(!(a<=b)) // Mayor o igual que
console.log(!(a==3)) // Igualdad por valor
console.log(!(a==a)) // Igualdad por valor
console.log(!(a===a)) // Igualdad por identidad (por tipo y valor) o igualdad estricta


// 5. Utiliza el operador lógico and

console.log(a<=b && a<5) // Mayor o igual que y menor que


// 6. Utiliza el operador lógico or

console.log(a<=b || a>5) // Mayor o igual que o mayor que

// 7. Combina ambos operadores lógicos

  console.log((a<=b && a<=2) || a<5) // Mayor o igual que y menor o igual que o mayor que 

// 8. Añade alguna negación

console.log(!(a===a)) // Igualdad por identidad (por tipo y valor) o igualdad estricta


// 9. Utiliza el operador ternario

let resultado = a >b ? "a es menor que b" : "a no es menor que b"
console.log(resultado)


// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log((a+b>5) && (a*b<20))//|| a>b) // Suma, multiplicación, mayor que, menor que y operador lógico   and