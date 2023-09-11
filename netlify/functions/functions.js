const fs = require('fs');

exports.handler = async function(){

  const data = fs.readFileSync('./data/db.json', 'utf8');

  const jsonData = JSON.parse(data);

  return {
    statusCode: 200,
    body: JSON.stringify(jsonData),
  }
}


