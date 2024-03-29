
const { Requester, Validator } = require('@chainlink/external-adapter')

// Define custom error scenarios for the API.
// Return true for the adapter to retry.
const customError = (data) => {
  if (data.Response === 'Error') return true
  return false
}


const customParams = {
  //accuweather location key for Austin: 351193
  // locationKey: [351193],
  relativeHumidity: ["RelativeHumidity", "relativeHumidity"],
  temperature: "temperature",
  
  endpoint: false
}

const createRequest = (input, callback) => {
  // The Validator helps you validate the Chainlink request data
  const validator = new Validator(callback, input, customParams)
  const jobRunID = validator.validated.id
  const endpoint = validator.validated.data.endpoint || 351193
  // const endpoint = data.endpoint || 351193
  console.log("endpoint: ", endpoint)

  const relativeHumidity = validator.validated.data.relativeHumidity

  const temperature = validator.validated.data.temperature

  const url = `http://dataservice.accuweather.com/currentconditions/v1/351193?apikey=qKAInUxdV1KUc9y76L7roGn6jWCasHWG&language=en-us&details=true`

  console.log("url: ", url)
 
  // const appid = process.env.API_KEY;
  

  const params = {
    // appid,
   relativeHumidity,
   temperature
 
  }

  const config = {
    url,
    params
  }
console.log(":config", config)
  // The Requester allows API calls be retry in case of timeout
  // or connection failure
  Requester.request(config, customError)
    .then(response => {
      // It's common practice to store the desired value at the top-level
      // result key. This allows different adapters to be compatible with
      // one another.
      // response.data.result = Requester.response.data
      // validateResultNumber(response.data)
      
      response.data.result = Requester.validateResultNumber(response.data, ['temperature', 'relativeHumidity'])
      callback(response.status, Requester.success(jobRunID, response))
      console.log(response.data.result)
    })
    .catch(error => {
      callback(500, Requester.errored(jobRunID, error))
    })
}

// This is a wrapper to allow the function to work with
// GCP Functions
exports.gcpservice = (req, res) => {
  createRequest(req.body, (statusCode, data) => {
    res.status(statusCode).send(data)
  })
}

// This is a wrapper to allow the function to work with
// AWS Lambda
exports.handler = (event, context, callback) => {
  createRequest(event, (statusCode, data) => {
    callback(null, data)
  })
}

// This is a wrapper to allow the function to work with
// newer AWS Lambda implementations
exports.handlerv2 = (event, context, callback) => {
  createRequest(JSON.parse(event.body), (statusCode, data) => {
    callback(null, {
      statusCode: statusCode,
      body: JSON.stringify(data),
      isBase64Encoded: false
    })
  })
}

// This allows the function to be exported for testing
// or for running in express
module.exports.createRequest = createRequest
