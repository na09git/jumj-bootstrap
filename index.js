const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const exphbs = require('express-handlebars')
const LogInCollection = require("./mongodb")
const port = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// handlebars from other source
// View engine and static files
// Template paths
const templatePath = path.join(__dirname, '../templates')
const srcPath = path.join(__dirname, '../src')
const viewsPath = path.join(__dirname, '../views/partials')


app.set('view engine', '.hbs')

app.set("views", templatePath)
app.use(express.static(srcPath));
app.use(express.static(viewsPath));







// Home page
app.get("/", (req, res) => {
    res.render("index")
})

// Register and login page
app.get(["/register", "/login"], (req, res) => {
    res.render("login_registration");
})


// Register user
app.post("/register", async (req, res) => {
    try {

        const data = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        };

        const userExists = await LogInCollection.findOne({ email: req.body.email })

        if (userExists) {
            res.send("User already exists!");
        }
        else {
            await LogInCollection.insertOne([data])
            res.status(200).send("New user successfully registered!");
        }

    }
    catch (error) {
        console.error(error);
        res.send("Something went wrong!");
    }

})


// Login user
app.post("/login", async (req, res) => {

    try {
        const user = await LogInCollection.findOne({ email: req.body.email })

        if (user) {
            if (user.password === req.body.password) {
                res.status(200).render("index", { message: `Welcome , ${req.body.name}!` })
            }

            else {
                res.send("Incorrect password!");
            }
        } else {
            res.send("User not found!");
        }
    } catch (error) {
        console.error(error);
        res.send("Something went wrong!");
    }
})


app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})