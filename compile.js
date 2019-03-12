const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'index.sol');
const source = fs.readFileSync(inboxPath,'utf8');

modle.exports = (solc.compile(source,1)).contrats[':Inbox'];