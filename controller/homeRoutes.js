const { User, House } = require('../models');
const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        // const houseData = await axios.get({thirdpartyapiroute})
        
        const houseData = await House.findAll({})

        const houses = houseData.map( ( house ) => house.get( {plain:true} ) )

        res.render('homepage', {
            houses,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;