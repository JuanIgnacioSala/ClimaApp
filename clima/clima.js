const axios = require('axios');


const getClima = async(lat, lng) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bffc6cd3688419e1baf74bc44938c257&units=metric&lang=es`)
    return resp.data.main.temp;
};



module.exports = {
    getClima
}