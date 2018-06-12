
'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////
const clone =                 require('clone-deep')
const dayjs =                 require('dayjs')
const {isNull} =              require('../../utils')
const errMsg =                require('../../config').error()

exports.WorkObj = o => {
  let workObj = {msg: "initialized"}
  return {
    ...o,
    updateWorkObj (obj) {
      workObj = { ...workObj, ...obj }
      return this
    },
    setWorkObj (obj) {
      workObj = clone(obj)
      return this
    },
    getWorkObj: () => workObj,
    setModelObj (obj) {
      this.setWorkObj(obj)
      return this
    },
    setMessage (obj) {
      let newObj = {}
      newObj.message = obj
      this.updateWorkObj(newObj)
      return this
    },
    getMessage: () => workObj.message,
    setPostdate (obj) {
      let newObj = {}
      newObj.postdate = Date.now()
      this.updateWorkObj(newObj)
      return this
    },
    getPostDate: () => workObj.Postdate,
    setCustomer (obj) {
      let newObj = {}
      newObj.customer = obj
      this.updateWorkObj(newObj)
      return this
    },
    getCustomer: () => workObj.customer,
    setConfig (obj) {
      let newObj = {}
      newObj.config = obj
      this.updateWorkObj(newObj)
      return this
    },
    getConfig: () => workObj.config,
    resetStatus () {
      let newObj = {}
      newObj.status = {}
      newObj.status.isNewInteraction = false
      newObj.status.isCallback = false
      newObj.status.isCallforward = false
      newObj.status.isTerminated = false
      newObj.status.ErrorMsg = undefined
      this.updateWorkObj(newObj)
      return this
    },
    getConfidenceThreshold: () => workObj.config.runparms.confidenceLevel,
    getMeter: () => workObj.meter,
    setMeter (obj) {
      let newObj = {}
      newObj.meter = workObj.meter.slice()
      newObj.meter.push(obj)
      this.updateWorkObj(newObj)
      return this
    },
    updateMeter (obj) {
      let newObj = {}
      newObj.meter = obj.slice()
      this.updateWorkObj(newObj)
      return this
    },
    setReply (resp) {
      workObj.response.reply.push(resp)
      return
    },
    setAgentReply (resp) {
      workObj.response.sender = resp.sender
      workObj.response.orgmessage = resp.orgmessage
      workObj.response.reply = [...workObj.response.reply, ...resp.reply]
      return
    },

    setWatsonClassification (response) {
       let newObj = {}
       newObj.classifier = {}
       let percent
       // capture confidence level from response for the top intent identified
       let newarray = response.classes.filter((r) => r.class_name == response.top_class )
       newObj.classifier.confidence = Math.round(newarray[0].confidence * 100) / 100
       percent = newObj.classifier.confidence * 100;
       percent = percent + '%'
       newObj.classifier.percent = percent
       newObj.classifier.orgclassification = response
       newObj.classifier.topclass = response.top_class
       newObj.classifier.engine = "Watson"
       this.updateWorkObj(newObj)
       return
     },

     getWatsonClassification: () => workObj.classifier,

     setMachineState (resp) {
       workObj.machine = { ...workObj.machine, ...resp }
       return
     },
     getMachineState: () => workObj.machine.thisState,

     setMember (resp) {
       let newObj = {}
       newObj.member = resp
       this.updateWorkObj(newObj)
       return
     },
     setAgent(resp) {
       let newObj = {}
       newObj.agent = resp
       this.updateWorkObj(newObj)
       return
     },

     incrementDialogue (resp) {
       let newObj = {}
       let newresponseObj = {}
       newresponseObj.priorinteract = resp.id    // capture id of last interaction
       newresponseObj.sequenceCnt = resp.dialogue.sequenceCnt + 1
       newObj.dialogue = newresponseObj
       this.updateWorkObj(newObj)                    // update dialogue object
     },
     updateMachineState (resp) {
       let newObj = {}
       let newresponseObj = {}
       newresponseObj.thisSlot = resp.machine.thisSlot + 1  // increment pointer to next agent skill
       let i = newresponseObj.thisSlot
       newresponseObj.thisState = resp.agent.skills[i].skillname   // set next skill to execute
       newresponseObj.name = resp.agent.name
       newObj.machine = newresponseObj
       this.updateWorkObj(newObj)
     },
    setNewDialogue () {
      let newObj = {}
      newObj.status = {}
      newObj.machine = {}
      newObj.dialogue = {}
      newObj.status.isNewInteraction = true
      newObj.machine.name = undefined
      newObj.machine.thisState = undefined
      newObj.machine.thisSlot = undefined
      newObj.dialogue.sequenceCnt = 1
      this.updateWorkObj(newObj)
      return this
    },
    setError (err) {
      let newObj = {}
      newObj.status = {}
      newObj.status.isNewInteraction = false
      newObj.status.isCallback = false
      newObj.status.isCallforward = false
      newObj.status.isTerminated = true
      newObj.status.ErrorMsg = err
      this.updateWorkObj(newObj)
      return this
    },
    getStatus: () => workObj.status,
    setContext (last) {
      return new Promise((resolve, reject) => {

      // if no interaction was found
      if (isNull(last)) {
        console.log("setcontext --- step 1")
        this.resetStatus()
        this.setNewDialogue()
        resolve(this.getStatus())
        return
      }

      if (last.status.isTerminated) {
        console.log("setcontext --- step 1 1/2")
        this.resetStatus()
        this.setNewDialogue()
        resolve(this.getStatus())
        return
      }

      // evaluate elapse time since last interaction
      let elapseTime = dayjs().diff(last.postdate, "seconds")
      let expireInterval = workObj.config.runparms.expirationInterval

      if (elapseTime > expireInterval) {
        console.log("setcontext --- step 2")
        this.resetStatus()
        this.setNewDialogue()
        resolve(this.getStatus())
        return
        }

      // thisSlot points to the array index -- when it equals array length we have no more skills to execute
      // Reset so intent of current text message is parsed as new interaction
      let nextSlot = last.machine.thisSlot + 1
      let endOfArray = last.agent.skills.length
      if (nextSlot == endOfArray) {
        console.log("setcontext --- step 3")
        this.resetStatus()
        this.setNewDialogue()
        resolve(this.getStatus())
        return
        }

      // terminate process if runaway machine detected
      if (last.dialogue.sequenceCnt > workObj.config.runparms.machineIterationThrehold) {
        console.log("setcontext --- step 4")
        let err = errMsg.e940
        this.setError(err)
        resolve(this.getStatus())
        return
      }

      // terminate process if infinite loop detected - limit on number of iterations for a single agent
      let loop = last.meter.filter((meter) => meter.cnt > workObj.config.runparms.agentCallbackThreshold )
      if (loop.length > 0) {
        console.log("setcontext --- step 5")
        let err = errMsg.e920
        this.setError(err)
        resolve(this.getStatus())
        return
      }

      // agent requests a callback. Last skill executed will be executed again
      if (last.status.isCallback == true) {
        console.log("setcontext --- step 6")
        this.updateWorkObj(last.machine)
        this.updateWorkObj(last.agent)
        this.updateWorkObj(last.meter)
        let newObj = {}
        newObj.dialogue = {}
        newObj.dialogue.priorInteract = last.id
        newObj.dialogue.sequenceCnt = workObj.dialogue.sequenceCnt
        newObj.dialogue.sequenceCnt++
        this.updateWorkObj(newObj)
        this.resetStatus()
        resolve(this.getStatus())
        return
      }

      // we know this is an active and existing dialogue. Bring forward critical data
      // from prior interaction
      console.log("setcontext --- step 7")
      this.resetStatus()
      resolve(this.getStatus())
      return

     })
    }

  }
}
