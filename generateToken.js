const crypto = require('crypto');

// Generate a random token
const token = crypto.randomBytes(64).toString('hex');

// Print the token to the console
console.log(token);
