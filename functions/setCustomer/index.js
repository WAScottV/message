

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////

const {db} =            require('../../db')

exports.setCustomer = (resp) => {
  let newObj = {}
  newObj.customer = resp

  db()
  .then((d) => {
    d.updateWorkObj(newObj)           // object with message data appended to workobject
    return
  })

}
