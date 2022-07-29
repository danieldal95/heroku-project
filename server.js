import pg from "pg";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();  
app.use(express.json());
app.use(express.static("static"));

const pool =  new pg.Pool({
    database: 'airline'
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
});

app.get("/passengers", (req, res) => {
    pool.query('SELECT * FROM passengers ORDER BY id ASC').then((data) => {
        res.send(data.rows)
    })
});

app.get("/passengers/:id", (req, res) => {
    const getId = req.params.id -1;
    pool.query('SELECT * FROM passengers ORDER BY id ASC').then((data) => {
        if (data.rows[getId]) {
            res.send(data.rows[getId]);
        } else {
            res.sendStatus(404);
        }
    })
});

app.get("/flightticket", (req, res) => {
    pool.query('SELECT * FROM flightticket ORDER BY id ASC').then((data) => {
        res.send(data.rows)
    })
});

app.get("/flightticket/:id", (req, res) => {
    const getId = req.params.id -1;
    pool.query('SELECT * FROM flightticket ORDER BY id ASC').then((data) => {
        if (data.rows[getId]) {
            res.send(data.rows[getId]);
        } else {
            res.sendStatus(404);
        }
    })
});

// app.post('/passengers', (req, res) => {
//     const postName = req.body.name;
//     const postNation = req.body.nationality;
//     const postEmail = req.body.email_address;
//     const postMinor = req.body.minor;
//     if(postName === undefined) {
//         res.sendStatus(404);
//     }
//     if(postNation === undefined) {
//         res.sendStatus(404);
//     }
//     if(postEmail === undefined) {
//         res.sendStatus(404);
//     }
//     if(postMinor === undefined) {
//         res.sendStatus(404);
//     }else {
//         pool.query(`INSERT INTO pets (name, nationality, email_address, minor) VALUES ('${postName}', '${postNation}', ${postEmail}, ${postMinor});`)
//         .then((data) => {
//             res.send(req.body);
//         })
//     }
// });