const crypto = require('crypto')
const security = {
    password_hash(password){
        return crypto.createHash('sha1').update(password).digest('hex');
    }
}

module.exports = security