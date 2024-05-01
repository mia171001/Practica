//Before

function addNumbers(obj) {
    const a = obj.a;
    const b = obj.x;
    const c = obj.c === undefined ? 0 : obj.c;
    return a + b + c;

}

//After
function addNumbers({ a, x: b, c = 3 }) {
    return a + b + c;
}

//La destructuración en JavaScript es una característica que te permite descomponer valores de arreglos o propiedades de objetos en variables individuales de manera más conveniente y concisa.Esto se hace mediante una sintaxis especial que utiliza corchetes[] para arreglos y llaves { } para objetos.