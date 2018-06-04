


////////////////////////////////////////
/////   workObject functons     ///////
//////////////////////////////////////

// workobject is updated by stage
let workObj = {}

exports.updateWorkObj = (obj) => {
  workObj = { ...workObj, ...obj }
  return
}
