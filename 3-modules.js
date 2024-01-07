//CommomJS, every file is module (by default)
//Modules - Encapsuled Code (only share minium)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternativeFlavor')
require('./7-mindGrenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
