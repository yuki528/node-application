const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('The routes work!!!');
})

module.exports = router;