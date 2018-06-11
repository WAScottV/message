
'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////
const clone =                 require('clone-deep')

exports.Connection = o => {
  let conn = {}
  return {
    ...o,
    setConnection (connection) {
      conn = connection
      conn.on('close', () => {
        console.log(b('connection closed...'))
      })
      return this
    },
    fetchConnection: () => conn,
    endConnection () {
        conn.close()
    }
  }
}
