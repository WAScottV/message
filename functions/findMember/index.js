

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////
const {getWorkObj} =        require('../getWorkObj')
const {getConnection} =     require('../getConnection')
const {fetchMember} =       require('../../api/db')

exports.findMember = async () => {
  let obj = await WorkObj()
  let conn = await Connection()
  let member = await getMember(obj, conn)
  return member
}

const WorkObj = () => {
  return new Promise ((resolve, reject) => {
    resolve(getWorkObj())
  })
}
const Connection = () => {
  return new Promise ((resolve, reject) => {
    resolve(getConnection())
  })
}
const getMember = (obj, conn) => {
  return new Promise((resolve, reject) => {
    resolve(fetchMember(obj, conn))
  })
}
