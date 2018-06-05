

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////

const {db}      = require('../db')

exports.setConnection = (connection) => {
  db()
  .then((d) => {
    d.setConnection(connection)
    return
  })

}


////////////////////////////////////////
/////   connection              ///////
//////////////////////////////////////
const setConnection = (connection) => {
  conn = connection

  conn.on('close', () => {
    console.log(b('connection closed...'))
  })

  return
  }

const getConnection = () => {
    return conn
  }

// this will close the database connection
const disconnect = () => {
  conn.close()
}
