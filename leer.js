const fs = require("fs");

const readFile=()=>{
    fs.readFile("./listaIA.json",'utf8',(err,data)=>{
        if(err){
            console.error("Error al leer archivo: ",err)
            return;
        }
        try{
            //te convierte el contenido del archivo JSON a un arreglo de JaveScript
            const listaIA = JSON.parse(data)
            console.log("Lista IA");
            //Mostrando el listado en la consola
            console.log(listaIA);
        }catch(parseError){
            console.error("Error al parsear el archivo JSON: ", parseError);
        }
    })
}

readFile();