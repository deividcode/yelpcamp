// archivo: functions/mi-funcion.js
const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  // Lee el archivo JSON
  const data = fs.readFileSync(path.join(__dirname, '../db.json'), 'utf8');
  const json = JSON.parse(data);

  // Devuelve los datos como respuesta
  return {
    statusCode: 200,
    body: JSON.stringify(json)
  };
}
