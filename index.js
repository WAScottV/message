
'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////

const { Connection,
        Store,
        WorkObj } =           require('./functions')

// pipe helps to drive the merge process using reducer
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

// contructor merges fucntions on each object into proto
const createMachine = () => pipe(
    Connection,
    Store,
    WorkObj,
    constructor(createMachine)
  )({});

// the only exposed method of this module
exports.createMachine = createMachine
