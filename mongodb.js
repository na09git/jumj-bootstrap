const mongoose = require("mongoose")

// mongoose.connect("mongodb+srv://na0908nna:nbvhgyt09mongodb@cluster0.hwpaydx.mongodb.net/jumj_login?retryWrites=true&w=majority")
mongoose.connect("mongodb://localhost:27017/new_db")
    .then(() => {
        console.log('mongoose connected Successfully!')
    })
    .catch((e) => {
        console.log("Database failed to connect to mongodb atlas")
    })

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const LogInCollection = new mongoose.model('LogInCollection', logInSchema)

module.exports = LogInCollection