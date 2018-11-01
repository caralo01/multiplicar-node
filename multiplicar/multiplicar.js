const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if(!Number(base))
            reject('No es un número');
        let data = '';
        for(let i = 1; i <=limite; i++){
            data += `${base} x ${i} = ${base*i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
            if (err) reject(err);

            resolve(`tabla-${base}.txt`);
        });
    })
    

}

let listarTabla = (base, limite) => {
    
    console.log('=================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('=================='.green);

    for(let i = 0; i <= limite; i++){
        console.log(`${base} x ${i} = ${base*i}`);
    }
};

module.exports = {
    crearArchivo,
    listarTabla
}



