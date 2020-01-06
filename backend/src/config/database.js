const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const url = "mongodb://localhost/mymoneyapp"

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
module.exports = mongoose.connect(url, options)

mongoose.Error.messages.general.required = "The attribute '{PATH}' is required"
mongoose.Error.messages.Number.min = 
    "The value '{VALUE}' reported is less than the lower limit of '{MIN}'"
mongoose.Error.messages.Number.max = 
    "The '{VALUE}' reported is greater than the upper limit of '{MAX}'"
mongoose.Error.messages.String.enum = 
    "'{VALUE}' not valid for attribute'{PATH}'"