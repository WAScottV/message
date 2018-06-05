

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////

const {db} =        require('../../db')

exports.setPostdate = (resp) => {
  let newObj = {}
  newObj.postdate = Date.now()

  db()
  .then((d) => {
    d.updateWorkObj(newObj)
    return
  })

}
