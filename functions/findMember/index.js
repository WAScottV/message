

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////
const dbc =       require('../../api/db')
const {db} =      require('../../db')

exports.findMember = async () => {
  let obj = await getWorkObj
  let conn = await getConnection
  let member = await getMember(obj, conn)
  return member
}

const getWorkObj = () => {
  return new Promise ((resolve, reject) => {
    db()
    .then((d) => {
      resolve(d.getWorkObj()) })
  })
}
const getConnection = () => {
  return new Promise ((resolve, reject) => {
    db()
    .then((d) => {
      resolve(d.getConnection()) })
  })
}
const getMember = (obj, conn) => {
  return new Promise((resolve, reject) => {
    resolve(dbc.findMember(obj, conn))
  })
}
