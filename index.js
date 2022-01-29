const { response } = require('express')
const express = require('express')
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'nwtracker'
})

const app = express()
const port = 4000

app.get('/', (req, res) => { 
    res.send( {
        info: "nwtracker API app"
    })
})

app.get('/categories', (req, res) => {
    pool.query('SELECT * FROM CATEGORIES', (error, results) => {
        if (error) throw error
        res.send(results.rows)
    })
})

app.get('/entries', (req, res) => {
    pool.query('SELECT * FROM entries', (error, results) => {
        if (error) throw error
        res.send(results.rows)
    })
})

app.post('/entries', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})



app.listen(port, () => {
    console.log(`nwtracker API listening at http://localhost:${port}`)
})