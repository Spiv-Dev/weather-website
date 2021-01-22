const request = require("postman-request");

const forecast = (longitude, latitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=f8a1ae498cbf495c1324f1da1b7311fd&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Could not connect to the weather service", undefined);
    } else if ((body.error, undefined)) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. 
        It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike}`
      );
    }
  });
};

module.exports = forecast;
