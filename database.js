const express = require('express')
const routesRouter = require('./database/router')
const cors = require('cors')
const PORT = 3030

const api = express()

api.use(cors());



api.use(express.json())
api.use('/api', routesRouter)

api.listen(PORT, ()=> console.log(`server started on port ${PORT}`))