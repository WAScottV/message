

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////


const {updateWorkObj} = require('../WorkObj')

exports.setMessage = (resp) => {
  console.log("entered setmessage")
  let newObj = {}
  newObj.message = resp
  updateWorkObj(newObj)

}
