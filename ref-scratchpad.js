import pg from "pg";
import express from "express";

const PORT = 3000;

const app = express();  
app.use(express.json());

const pool =  new pg.Pool({
    database: 'petshop'
});

app.get("/pets", (req, res) => {
    pool.query('SELECT * FROM pets ORDER BY id ASC').then((data) => {
        res.send(data.rows)
    })
});

app.get("/pets/:id", (req, res) => {
    const getId = req.params.id -1;
    pool.query('SELECT * FROM pets ORDER BY id ASC').then((data) => {
        if (data.rows[getId]) {
            res.send(data.rows[getId]);
        } else {
            res.sendStatus(404);
        }
    })
});

app.post('/pets', (req, res) => {
    const postName = req.body.name;
    const postKind = req.body.kind;
    const postAge = req.body.age;
    if(postName === undefined) {
        res.sendStatus(404);
    }
    if(postKind === undefined) {
        res.sendStatus(404);
    }
    if(postAge === undefined) {
        res.sendStatus(404);
    } else {
        pool.query(`INSERT INTO pets (name, kind, age) VALUES ('${postName}', '${postKind}', ${postAge});`)
        .then((data) => {
            res.send(req.body);
        })
    }
});

app.patch('/pets/:id', (req, res) => {
    const petsId = parseInt(req.params.id);
    const patchName = req.body.name;
    const patchKind = req.body.kind;
    const patchAge = req.body.age;
    const petsIdx = req.params.id -1;
    pool.query("UPDATE pets SET name = COALESCE($1, name), age = COALESCE($2, age), kind = COALESCE($3, kind) WHERE id = $4 RETURNING *;", [patchName, patchAge, patchKind, petsId])
    .then((data) => {
        console.log(data)
        res.send(data.rows[0])
    })
})

app.delete('/pets/:id', (req, res) => {
    const petsId = req.params.id -1;
    pool.query("DELETE FROM pets WHERE id = $1", [petsId])
    .then((data) => {
        if(data.rows.length === 0) {
            res.sendStatus(404);
        } else {
            res.sendStatus(204);
        }
    })
})

// pool.query('UPDATE pets SET name = $1, kind = $2, age = $3 WHERE id = $4 RETURNING *;', [patchName], [patchKind], [patchAge], [petsId])
//     .then((data) => {
//         res.send(data.rows[petsId]);
//     })

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
});