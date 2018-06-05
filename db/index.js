
'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////        transient db constructor c2017   //////////////
/////////////////////////////////////////////////////////////////

const clone =                 require('clone-deep')
const dayjs =                 require('dayjs')
const errMsg =                require('./config').error()
const { g, b, gr, r, y } =    require('./console')

// factory function, that holds an transient data object
// these functions are used by the machine factory function

const repository = () => {

  // data object is updated by stage
  let workObj = {}

  // db connection
  let conn = {}

  ////////////////////////////////////////
  /////   workObject functons     ///////
  //////////////////////////////////////

  exports.updateWorkObj = (obj) => {
    workObj = { ...workObj, ...obj }
    return
  }

  exports.setWorkObj = (obj) => {
    workObj = clone(obj)
    return
  }

  exports.getWorkObj = () => {
    return workObj
  }


//
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
////////////////////////////////////////////////////
/////          export all functions         ///////
//////////////////////////////////////////////////

return Object.create({
  disconnect,
  getConnection,
  getWorkObj,
  setConnection,
  setWorkObj,
  updateWorkObj
  })
}

const db = () => {
return new Promise((resolve, reject) => {

  resolve(repository())
})
}

// the only exposed method of this module
module.exports = Object.assign({}, {db})
