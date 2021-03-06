const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    console.log('in router get');
    const sqlText = `SELECT * FROM item`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    let query = `INSERT INTO item ("description", "image_url", "user_id") VALUES ($1, $2, $3)`
    let values = [req.body.description, req.body.image_url, req.body.user_id]
    pool.query(query, values).then((result)=>{
      res.sendStatus(200);
    }).catch((error) =>{
        console.log(error)
        res.sendStatus(500);
    })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  let query = `DELETE FROM item WHERE id =  $1`
  let values = [req.params.id]
  pool.query(query, values).then((result)=>{
    res.sendStatus(200);
  }).catch((error) =>{
      console.log(error)
      res.sendStatus(500);
  })
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  let query = `UPDATE item SET "description" = $1 WHERE id = $2`
  let values = [req.body.payload, req.params.id ]
  pool.query(query, values).then((result)=>{
    res.sendStatus(200);
  }).catch((error) =>{
      console.log(error)
      res.sendStatus(500);
})
})



/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;