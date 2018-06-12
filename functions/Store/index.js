
'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////
const Classify =              require('watson-developer-cloud/natural-language-classifier/v1')
const clone =                 require('clone-deep')
const dayjs =                 require('dayjs')
const errMsg =                require('../../config').error()
const db =                    require('../../api/db')
const http =                  require('../../api/http')

exports.Connection = o => {
  let conn = {}
  return {
    ...o,
    classifyMessage (obj) => {
      // REFACTOR - test for failed conditions - unable to retrieve classifier
      const c = new Classify({
        username: obj.config.watsonclassifier.username,
        password: obj.config.watsonclassifier.password
      });

      return new Promise((resolve, reject) => {
        c.classify({
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
    getAgentReply (obj) => {
        let apiparm = { url: getCurrentAgentSkill(),
                        body: obj,
                        headers: { "Content-Type": "application/json" } };
        //
        return new Promise((resolve, reject) => {
          resolve(http.getAgentResponse(apiparm))
        })
      },
    findAgent (obj, conn) => {
      return new Promise((resolve, reject) => {
        resolve(db.findAgent(obj, conn))
        })
      },
    findMember (obj, conn) => {
      return new Promise((resolve, reject) => {
        resolve(db.fetchMember(obj, conn))
      })
    }
  }
}
