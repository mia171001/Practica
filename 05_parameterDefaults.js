//BEFORE

function addNumbers(a, b) {
    a = typeof a === 'string' ? 0 : a;
    return a + b;
}

function addNumbers2(a = 0, b = 1) {
    return a + b;
}

console.log(addNumbers('mia', 2));

//Los parámetros por defecto (parameter defaults) en JavaScript son una característica que te permite asignar valores predeterminados a los parámetros de una función en caso de que no se les pase ningún valor o se les pase undefined. Esto proporciona un valor de respaldo para evitar errores o comportamientos inesperados cuando no se proporciona un valor explícito al llamar a la función.