

// generate functions for managing the data object
const {WorkObj} =   require('./workobj')

const updateWorkObj = WorkObj.updateWorkObj.bind(WorkObj);
const setWorkObj = WorkObj.setWorkObj.bind(WorkObj);
const fetchWorkObj = WorkObj.fetchWorkObj.bind(WorkObj);
/*
console.log("DEBUG WorkObj")
console.log(WorkObj)
console.log(typeof WorkObj)
console.log(fetchWorkObj())
updateWorkObj({newmsg: "more messages"})
console.log(fetchWorkObj())
setWorkObj({now: 'everything has changed'})
console.log(fetchWorkObj())
*/

module.exports = Object.assign({}, { updateWorkObj,
                                     setWorkObj,
                                    fetchWorkObj })
