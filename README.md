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
Manually create table in postgres
Set up test: 

```
pool.query('SELECT * FROM CATEGORIES', (error, results) => {
    if (error) throw error
    console.log(results.rows)
}) 
```
