//Archivo de configuracion para la base de datos


//Importar el modulo MySQL
const mysql = require('mysql')

//Creando conexion con MySQL
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3308',
    password: '1234',
    database: 'hospital'
})

conexion.connect(function (error){
    if (error){
        console.log(`Ocurrio un error en la conexion ${error}`)
        return;
    }else{
        console.log('Conexion exitosa')
    }
})

module.exports = {conexion}