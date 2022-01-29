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

app.use(express.json())

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

app.get('/entries/:id', (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM entries where ID = $1', [id], (error, results) => {
        if (error) {
            res.status(422).send({ error: error.message})
        } else if (results.rows.length == 0) {
            res.status(404).send( {error: error.message})
        }else {
            res.send(results.rows[0])
        }
    })
})

app.post('/entries', (req, res) => {
    pool.query('INSERT INTO entries (quantity, total_value, currency, code, name, cat_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *'
    , [req.body.quantity, req.body.total_value, req.body.currency, req.body.code, req.body.name, req.body.cat_id]), (error, results) => {
        if (error) {
            res.status(422).send({ error: error.message})
        } else {
            res.send(results.rows[0])
        } 
    }
})



app.listen(port, () => {
    console.log(`nwtracker API listening at http://localhost:${port}`)
})