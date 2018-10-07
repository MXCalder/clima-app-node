const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=471231bfa9ef6a0bce9b66b20b59b23c`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}