const n = 'Mia';
const e = 22;
const c = { d: ['front - end', 'back - end'] }

//Before

// const objectLiteral = {
//     a: n,
//     b: e,
//     c: c
// }

console.log({ n: n, e: e, c: c });

//After

console.log({ n, e, c });

//El "shorthand property names" es una característica de JavaScript que te permite asignar valores a propiedades de un objeto utilizando una sintaxis más concisa cuando la variable que contiene el valor tiene el mismo nombre que la propiedad que deseas crear.