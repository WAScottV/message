

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////

const {db} =      require('../../db')

exports.setMessage = (resp) => {
  console.log("TRACE Message")
  let newObj = {}
  newObj.message = resp

  db()
  .then((d) => {
    d.updateWorkObj(newObj)
    return
  })

}
