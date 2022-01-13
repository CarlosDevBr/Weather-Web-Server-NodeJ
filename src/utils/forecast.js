const request = require('request')
const chalk = require('chalk')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7b9504fbd97294097995148c63564f89&query=' + latitude + ',' + longitude

    request({ url , json: true }, (error, {body}) => {   
        if (error){
            callback(('Unable to connect to weather service!'), undefined)
        } else if(body.error){
            callback(('Unable to find location'), undefined)
        } else {
            const weather = body.current
            callback(undefined,('It is currently '+ weather.temperature + ' degress out. It feel like '+ weather.feelslike +' degress out. The localtime is ' + body.location.localtime + '. The humidity is ' + weather.humidity + '%.'))
        }
    })
}

module.exports = forecast