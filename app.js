const express = require('express');
const app = express();
const tasks = require('../starter/routes/tasks')
const connectDb = require('../starter/db/connect');
const notFound = require('./middleware/not-found');
require('dotenv').config()
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
//app.use(express.static('./public'))
app.use(express.json());

//routes
app.use('/api/v1',tasks)
app.use(errorHandlerMiddleware)
app.use(notFound)


const port = 3000;

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server started on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()