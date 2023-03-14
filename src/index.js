import mongoose from "mongoose"
import express from "express"
import handlebars from "express-handlebars"
import __dirname from './utils.js'
import ViewsRouter from './routes/views.routes.js'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', ViewsRouter)

await mongoose.connect('mongodb://localhost:27017', {
        dbName: "pizzacoder"
    })
app.listen(8080, () => console.log('Server Up'))
