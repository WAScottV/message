
exports.setMessage = (resp) => {
  let newObj = {}
  newObj.message = resp
  updateWorkObj(newObj)           // object with message data appended to workobject
  return
}
