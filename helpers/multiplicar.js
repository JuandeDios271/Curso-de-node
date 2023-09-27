const fs =require('fs');
const colors = require('colors');

 const crearArchivo = async(base = 5, listar = false, hasta = 10 ) => {

    try {

        

        let salida  = '';
        let  consola  = '';

        for (let i= 1; i<= hasta; i++){
            salida += `${base}  X  ${i}  =  ${base * i}\n`;
            consola += `${base} ${' X '.red} ${i} ${' = '.red} ${base * i}\n`;
        }
        
        if( listar ){
            console.log('============================='. red);
            console.log('        TABLA DEL: '.magenta, colors.bgMagenta(base));
            console.log('============================='.red);
            
            console.log(consola);
            }
        
        
        fs.writeFileSync( `./salida/Tabla del ${base}.txt`, salida  );
        
        return `Tabla del ${base}.txt creada`;

    } catch (err) {
        throw err
    }
        

        

    
} 

module.exports = {
    crearArchivo
}