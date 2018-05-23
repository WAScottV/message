
//////////////////////////////////////////////////////////////////////////
//////////                   http calls                     /////////////
////////////////////////////////////////////////////////////////////////

const request =       require('request')

// cloud functions residing on microservices platforms like ow, aws, google
// note in post request, 'json' is a key word -- ie {json: { key: value }}

  exports.getAgentResponse = (apiparm) => {
       return new Promise((resolve, reject) => {
         request.post(
              apiparm.url,
              { json: apiparm.body },
              function (error, response, body) {
                if (error) {
                    console.log("Error encountered in microservices http call - getAgentResponse")
                    console.log(error)
                    reject(error)}
                resolve(body)
          });
       })
     }
