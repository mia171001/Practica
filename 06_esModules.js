export const multNumbers = (a, b) => a * b;

import { multNumbers } from './app';


const multNumbers2 = (a, b) => a * b;

export default multNumbers2;

import mypro from './app';

//Los EsModules permiten importar y expprtar codigo necesario, esto se hace en 2 archivos uno que importa
//y otro que exporta, el detalle es que hay 2 formas de hacerlo puedes poner export const con el nombre de la funcion
// para exportarlo y para importar pones ese nombre entre llaves y la direccion del archivo de donde se encuentra
// por otro lado tambien puedes hacer una exportacion por default y al importar puedes poner cualquier nombre
// y poner la direccion del archivo de exportacion