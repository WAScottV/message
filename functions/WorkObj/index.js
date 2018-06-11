
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
    setMessage (resp) {
      console.log("entered setMessage")
      let newObj = {}
      newObj.message = o
      this.updateWorkObj(newObj)
      return this
    }
  }
}
