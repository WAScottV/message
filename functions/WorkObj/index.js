
'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////
const clone =                 require('clone-deep')

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
    }
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
  }
}
