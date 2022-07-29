// fetch('/passengers').then(res => res.json()).then((data) => {
//     document.write(JSON.stringify(data))
// })

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