express = require('express')
app = module.exports = express()

app.use '/', express.static('dist')
app.use '/node_modules', express.static('node_modules')
