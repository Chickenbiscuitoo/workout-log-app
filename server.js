const express = require('express')
const connectDB = require('./config/db')
const path = require('path')
const dotenv = require('dotenv').config()

const app = express()

// Connect Database
connectDB()

// Middleware
app.use(express.json())

// Routes
app.use('/api/logs', require('./routes/api/logs'))
app.use('/api/users', require('./routes/api/users'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
