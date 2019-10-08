const lib = require('./lib.js');

const password = 'P@ssw0rd12345';
//const salt = '83d88386463f0625';
// = lib.createSsha512Hash(password, salt);
//console.log("Hash is: " + rfc2307Hash);
const passwordHash = '{ssha512}pRHBknMNVsRhAiGiT3CXDrYePVf9i0D55cjWCuvUdO0SgRW8mgek1ydZ1lyGm1lAcIYamEIWSrcla3XeH+A63YPYg4ZGPwYl';


console.log("Did password hash match: " + lib.checkSsha512(password,passwordHash));



  