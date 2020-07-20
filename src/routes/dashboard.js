const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'Dashboard',
        status: 200
    })
});

module.exports = router;