'use strict';

///////////////////////////////////////////////////////////////
////////      function to instantiate exports object   ///////
///////               copywrite xio  2018             ///////
/////////////////////////////////////////////////////////////

// export all stages

// The physical file name (ie message.js) is refactored as the function name (ie message)
// refactored name must match export object -- enforcing convention for function names of constructor


require('fs').readdirSync(__dirname + '/').forEach(function(folder) {
  if (folder !== 'index.js') {
    let fn = require('./' + folder);
    exports[folder] = fn[folder]
    console.log(folder)
    console.log(typeof folder
    }
});
