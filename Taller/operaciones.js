const fs = require("fs");

function registrar(marca, modelo, color) {
  fs.readFile("./vehiculos.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer archivo: ", err);
      return;
    }
    //Convertir el JSON en un arreglo
    const vehiculos = JSON.parse(data);

    //Crear nuevo objeto con los datos del vehiculo
    const nuevoVehiculo = {
      marca,
      modelo,
      color,
    };

    vehiculos.push(nuevoVehiculo);
    fs.writeFile("./vehiculos.json", JSON.stringify(vehiculos), (error) => {
      if (error) {
        console.error("Error al escribir en el archivo: ", err);
        return;
      } else {
        console.log("Vehiculo registrado con Exito!!!!");
      }
    });
  });
}

const leer = () => {
  fs.readFile("./vehiculos.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer archivo: ", err);
      return;
    }
    try {
      //te convierte el contenido del archivo JSON a un arreglo de JaveScript
      const vehiculos = JSON.parse(data);
      console.log("Listado Vehiculos");
      //Mostrando el listado en la consola
      console.log(vehiculos);
    } catch (parseError) {
      console.error("Error al parsear el archivo JSON: ", parseError);
    }
  });
};

module.exports = { registrar, leer };
