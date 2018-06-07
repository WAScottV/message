

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////
const dbc =       require('../../api/db')
const {db} =      require('../../db')

exports.findMember = async () => {
  let obj = await getWorkObj()
  let conn = await getConnection()
  let member = await getMember(obj, conn)
  return member
}

const getWorkObj = () => {
  return new Promise ((resolve, reject) => {
    db()
    .then((d) => {
      let obj = d.getWorkObj()
      console.log("ENTERED findmember work")
      console.log(obj)
      console.log(d.getWorkObj())
      //resolve(obj)
    })
  })
}
const getConnection = () => {
  return new Promise ((resolve, reject) => {
    db()
    .then((d) => {
      let conn = d.getConnection()
      console.log("ENTERED findmember conn")
      console.log(conn)
      resolve(conn) })
  })
}
const getMember = (obj, conn) => {
  return new Promise((resolve, reject) => {
    resolve(dbc.findMember(obj, conn))
  })
}
