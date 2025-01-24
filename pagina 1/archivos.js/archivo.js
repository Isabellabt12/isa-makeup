//importar el modulo 'fs' para trabajar con el sistema de archivos 
const fs =require('fs');

//Funcion para leer un archivo 
function readFile(filePath){
    fs.readFile(filePath,'utf8',(err,data)=>{
        if (err){
            console.error('Error leyendo el archivo:',err);
            return;
        }
        console.log('Contenido del archivo:',data);
    });
}
//llamar a la funcion con la ruta del archivo
readFile('extension.pdf');

//no se ven los cambios en terminal para las extenciones