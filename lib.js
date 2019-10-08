const passwordhasher = require('password-hasher');
const atob = require('atob');

/** 
 * Creates a {ssha512} hash
 * @param  {String} password  password as string
 * @param  {String} salt      hex string
 * @return {String}           a string that contains password hash in the RFC2307 format
 */
function createSsha512Hash( password, salt) {
    const hash = passwordhasher.createHash('ssha512', password, Buffer.from(salt, 'hex'));
    return passwordhasher.formatRFC2307(hash);
}

/**
 * 
 * @param {String} passwd   The actual password in the RFC2307 format 
 * @param {Strin} hash  The actual hash in the RFC2307 format  
 * @return {boolean} true if password matches
 */
function checkSsha512(passwd, hash) {
    if (hash.substr(0,9) != '{ssha512}') {
        return new Error('not {ssha512}');
    }
    const bhash = Buffer.from(hash.substr(9),'base64');
    const salt = bhash.toString('hex',64); // sha512 digests are 64 bytes long
    console.log("Extracted salt from password hash: " + salt);
    const hash1 = passwordhasher.createHash('ssha512', passwd, Buffer.from(salt, 'hex'));
    const rfcHash = passwordhasher.formatRFC2307(hash1);
    return rfcHash === hash;
}

module.exports.checkSsha512 = checkSsha512;
module.exports.createSsha512Hash = createSsha512Hash;


  