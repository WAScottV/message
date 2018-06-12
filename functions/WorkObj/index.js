
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
    fetchWorkObj: () => workObj,
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
    setPostdate (obj) {
      let newObj = {}
      newObj.postdate = Date.now()
      this.updateWorkObj(newObj)
      return this
    },
    setCustomer (obj) {
      let newObj = {}
      newObj.customer = obj
      this.updateWorkObj(newObj)
      return this
    },
  }
}
