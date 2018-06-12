
'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////
const Classifier =            require('watson-developer-cloud/natural-language-classifier/v1')
const clone =                 require('clone-deep')
const dayjs =                 require('dayjs')
const errMsg =                require('./config').error()
const db =                    require('./api/db')
const http =                  require('./api/http')

exports.Connection = o => {
  let conn = {}
  return {
    ...o,
    classifyMessage (obj) => {
      // REFACTOR - test for failed conditions - unable to retrieve classifier
      const classifier = new Classifier({
        username: obj.config.watsonclassifier.username,
        password: obj.config.watsonclassifier.password
      });

      return new Promise((resolve, reject) => {
        classifier.classify({
          text: obj.message.Body,
          classifier_id: obj.config.watsonclassifier.classifier1 },
          function(err, response) {
            if (err) reject(err)
            resolve(response)
            })
          })
      },
    findLastInteraction (obj, conn) => {
        return new Promise((resolve, reject) => {
          resolve(db.findLastInteraction(obj, conn))
          })
        },
    saveInteraction (obj, conn) => {
        return new Promise((resolve, reject) => {
          resolve(db.saveInt(obj, conn))
        })
      },    

  }
}
