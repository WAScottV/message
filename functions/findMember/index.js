

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////
const dbc =       require('../../api/db')
const {db} =      require('../../db')

exports.findMember = (obj, conn) => {
  console.log("findmember in message")
  console.log(obj)
  console.log(conn)
/*
  db()
  .then((d) => {
    let obj = d.getWorkObj()
    let conn = d.getConnection()
    return new Promise((resolve, reject) => {
      resolve(dbc.findMember(obj, conn))
      })
  })
*/
  return new Promise((resolve, reject) => {
    resolve(dbc.findMember(obj, conn))
  })

}
