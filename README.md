## WIP

## Notes

Helpful setup commands 

```
npm init -y
npm i express pg
node index.js
npm i nodemon
npm i cors 
```

-- 
manually create table in postgres
set up test: 
pool.query('SELECT * FROM CATEGORIES', (error, results) => {
    if (error) throw error
    console.log(results.rows)
}) 
