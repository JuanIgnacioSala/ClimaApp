const axios = require('axios');

// 'esversion: 6'
const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: 'https://api.opencagedata.com/geocode/v1/json',
        params: { 'key': 'ed0a09d6c5c940a3a1dfdc5c8688993c', 'q': encodeUrl, 'pretty': '1', 'no_annotations': '1' }
    });


    const resp = await instance.get();

    if (resp.data.results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.results[0];


    const dir = data.formatted;
    const lat = data.geometry.lat;
    const lng = data.geometry.lng;

    return {
        dir,
        lat,
        lng
    };

};

module.exports = {
    getLugarLatLng
}