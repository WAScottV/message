'use strict';

///////////////////////////////////////////////////////////////
////////      function to instantiate exports object   ///////
///////               copywrite xio  2018             ///////
/////////////////////////////////////////////////////////////

// export all function

// The physical folder name (ie setMessage) is used to reference the function name (ie exports.setMessage)
// folder name must match export object -- enforcing convention for organizing oce of this factory function

require('fs').readdirSync(__dirname + '/').forEach(function(folder) {
  if (folder !== 'index.js') {
    let fn = require('./' + folder);
    exports[folder] = fn[folder]
    }
});
