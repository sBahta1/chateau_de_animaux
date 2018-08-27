const express= require('express');
const router= express.Router();
var pool= require('../modules/pool.js');


router.post('/', (req, res) => {
    console.log('POST /checks', req.body);
    const checkIn=req.body;
    const queryText = `INSERT INTO "check-ins" ("pet_id", "check_in_date", "check_in_time") VALUES ($1, $2, $3);`;
    pool.query(queryText, [checkIn.pet_id, checkIn.indate, checkIn.intime])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) =>{
            console.log('error making pet insert query', error);
            res.sendStatus(500);    
        });
});

module.exports = router;