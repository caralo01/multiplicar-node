
//requireds
/**
 * Tres tipos
 * 1.los propios de node, const fs = require('fs'); 
 * 2.los que instalas de npm const express = require('express');
 * 3. los que creas tu const bla = require('./file');
 */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];

switch(comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then( archivo => {
            console.log(`Archivo creado`, colors.green(archivo))
        }).catch( e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido')
}
//sin la libreria yargs
let argv2 = process.argv;

