

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////
const clone =                 require('clone-deep')

let workObj = {msg: 'wrong message'}

exports.WorkObj = {
  workObj: {msg: "right message"},
  updateWorkObj: function(obj) {
    this.workObj = { ...this.workObj, ...obj }
    return
  },
  setWorkObj: function(obj) {
    this.workObj = clone(obj)
    return
  },
  fetchWorkObj: function() {
    return this.workObj
  }

}
