
const fs = require('fs');
var colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {

        let salida = '';
        let consola = '';       

        for( let i = 1; i <= hasta; i++ ) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ colors.blue.bold('x') } ${ i } = ${ base * i }\n`;
        }

        if ( listar ) {
            console.log('===================');
            console.log('    Tabla del:', colors.red.underline(base));
            console.log('===================')
            
            console.log(colors.green.dim(consola));
        }



        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
            

        return `tabla-${ base }.txt`; 

    } catch (err) {

        throw err;
        
    }


}

module.exports = {
    crearArchivo
}

