

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////
const clone =                 require('clone-deep')

let conn = {}

exports.newConnection = (connection) => {
  conn = connection
  conn.on('close', () => {
    console.log(b('connection closed...'))
  })
  return
}

exports.fetchConnection = () => {
  return conn
}

exports.endConnection = () => {
    conn.close()
}
