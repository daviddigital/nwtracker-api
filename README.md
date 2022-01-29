npm init -y
npm i express pg
node index.js
npm i nodemon

-- 
manually create table in postgres
set up test: 
pool.query('SELECT * FROM CATEGORIES', (error, results) => {
    if (error) throw error
    console.log(results.rows)
}) 