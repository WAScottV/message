

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////
const clone =                 require('clone-deep')

let workObj = {}

exports.updateWorkObj = (obj) => {
  workObj = { ...workObj, ...obj }
  return
}

exports.setWorkObj = (obj) => {
  workObj = clone(obj)
  return
}

exports.fetchWorkObj = () => {
    return workObj
}
