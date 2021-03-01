const process = require('process')

const axios = require('axios')
const qs = require('qs');
const { PassThrough } = require('stream');

exports.handler = function(event, context, callback) {

  const {API_TOKEN, API_URL } = process.env;
  const URL = `${API_URL}${API_TOKEN}`;

  //defines how our response will look, when we call w/callback
  const pass = body =>{
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    })
  };
  
  //api call
  const get = () => {
    axios
    .get(URL, {headers: {Accept: "application/json"}})
    .then((response)=>{
      console.log(response.data)
      pass(response.data)
    })
    .catch((err)=>pass(err))  
  };

  if (event.httpMethod == "GET") {
    get()
  };

}
