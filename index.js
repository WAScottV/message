
'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////
const Classifier =            require('watson-developer-cloud/natural-language-classifier/v1')
const clone =                 require('clone-deep')
const dayjs =                 require('dayjs')
const {constructor} =         require('./constructor');
const errMsg =                require('./config').error()
const db =                    require('./api/db')
const http =                  require('./api/http')
const { endConnection,
        Connection,
        findMember,
        getConfig,
        getConnection,
        getWorkObj,
        setConfig,
        setConnection,
        setCustomer,
        setMessage,
        setModelObj,
        setPostdate,
        WorkObj
                      } =     require('./functions')
const {isNull} =              require('./utils')
const { g, b, gr, r, y } =    require('./console')

// the constructor is simply dropped into the pipeline with other
// functions to produce objects at scale for the messaging
// platform. Each object holds the data object (text message),
// net work connection for the network owner, and methods for
// interrogating the object

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

//const repository = () => {

  // workobject is updated by stage
  //let workObj = {}

  // db connection - based on customer api
  //let conn = {}

  //////////////////////////////////////////////////////
  //////          Watson SDK                     //////
  ////////////////////////////////////////////////////

    // REFACTOR - test for failed conditions - unable to retrieve classifier
    const classifyMessage = () => {

      const classifier = new Classifier({
        username: workObj.config.watsonclassifier.username,
        password: workObj.config.watsonclassifier.password
      });

      return new Promise((resolve, reject) => {
        classifier.classify({
          text: workObj.message.Body,
          classifier_id: workObj.config.watsonclassifier.classifier1 },
          function(err, response) {
            if (err) reject(err)
            resolve(response)
            })
          })
        }

  ////////////////////////////////////////
  /////   Interactions            ///////
  //////////////////////////////////////
  const findLastInteraction = () => {
    let obj = clone(workObj)
    return new Promise((resolve, reject) => {
      resolve(db.findLastInteraction(obj, conn))
      })
    }

  const saveInteraction = () => {
    let obj = clone(workObj)
    return new Promise((resolve, reject) => {
      resolve(db.saveInt(obj, conn))
      })
  }
  ////////////////////////////////////////
  /////   Agents                 ////////
  //////////////////////////////////////

  // test url: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/sm_test.json',
  const getAgentReply = () => {
    let obj = clone(workObj)
    let apiparm = { url: getCurrentAgentSkill(),
                    body: obj,
                    headers: { "Content-Type": "application/json" } };
    //
    return new Promise((resolve, reject) => {
      resolve(http.getAgentResponse(apiparm))
    })
  }

  //dynamic connect and search of agent collectionfor that client
  const findAgent = () => {
    let obj = clone(workObj)
    return new Promise((resolve, reject) => {
      resolve(db.findAgent(obj, conn))
      })
    }

  ////////////////////////////////////////////////////
  /////          export all functions         ///////
  //////////////////////////////////////////////////
  const createMachine = () => pipe(
    Connection,
    WorkObj,
    constructor(createMachine)
  )({});

// the only exposed method of this module
exports.createMachine = createMachine

/*
classifyMessage,
endConnection,
findAgent,
findLastInteraction,
findMember,
getAgentReply,
getConfidenceThreshold,
getConnection,
getCurrentAgentSkill,
getMachineState,
getMeter,
getStatus,
getConfig,
getWatsonClassification,
getWorkObj,
incrementDialogue,
saveInteraction,
setAgent,
setAgentReply,
setConfig,
setConnection,
setContext,
setCustomer,
setError,
setMachineState,
setMember,
setMessage,
setMeter,
setModelObj,
setPostdate,
setReply,
setWatsonClassification,
updateMachineState,
updateMeter,
*/
