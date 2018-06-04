
'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////        transient db constructor c2017   //////////////
/////////////////////////////////////////////////////////////////

const clone =                 require('clone-deep')
const dayjs =                 require('dayjs')
const errMsg =                require('./config').error()
const { g, b, gr, r, y } =    require('./console')

// factory function, that holds an open connection to the db,
// these functions are used by the machine factory function

const repository = () => {

  ////////////////////////////////////////
  /////   workObject functons     ///////
  //////////////////////////////////////

  // workobject is updated by stage
  let workObj = {}

  exports.updateWorkObj = (obj) => {
    workObj = { ...workObj, ...obj }
    return
  }


//
////////////////////////////////////////////////////
/////          export all functions         ///////
//////////////////////////////////////////////////

return Object.create({

  })
}

const db = () => {
return new Promise((resolve, reject) => {

  resolve(repository())
})
}

// the only exposed method of this module
module.exports = Object.assign({}, {db})
