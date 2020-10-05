const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const colors = require('colors')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la ciudad que queremos obtener',
        demand: true
    }
}).argv

//argv.direccion




const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        t = Math.round(temp);
        return `La temperatura actual en ${coords.dir.green} es de ${t} ºC.`;
    } catch (e) {
        return `No se pudo determinar la temperatura de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)