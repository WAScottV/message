

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////

const {db} =          require('../../db')

exports.setModelObj = (obj) => {

  console.log("TRACE")
  console.log(obj)

  db()
  .then((d) => {
    d.setWorkObj(obj)
    return
  })

}
