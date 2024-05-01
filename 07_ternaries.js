//Before
let age = 20;

if (age >= 18) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

//After
let age2 = 16;
age2 >= 18 ? console.log('Es mayor de edad') : console.log('Es menor de edad');

//Los ternarios en JavaScript son una forma abreviada de escribir una expresión condicional. Toman una condición, y si es verdadera(?), devuelve una expresión; si es falsa(:), devuelve otra. Son útiles para tomar decisiones rápidas y escribir código más limpio y conciso.