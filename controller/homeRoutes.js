const { User, House } = require('../models');
const router = require('express').Router();
const axios = require('axios');
const url = 'https://data.cityofnewyork.us/resource/wvxf-dwi5.json'


router.get('/',  (req, res) => {
    try {
        const house = []
        // const houseData =  axios.get(url)
        axios.get(url)
            .then((data) => {
                for (i=0; i < 10; i++) {
                    house.push(data.data[i])
                }
                // console.log(data)
                // console.log(typeof data)
                
                res.render('homepage', {
                    house,
                    logged_in: req.session.logged_in
                }
                )
            })
            .catch((err) => {
                console.log(err)
            })
            

     
        // console.log(houseData[0])
        // const houseData = await House.findAll({})

        // const houses = houseData.map( ( house ) => house.get({plain: true}))
        // console.log(house)
      
    } catch (err) {

        res.status(500).json(err)
    }
});

router.get('/zip/:zip' , async (req, res) => {
    try {
        const zip = req.params.zip
        const houseData = await axios.get(`https://data.cityofnewyork.us/resource/wvxf-dwi5.json?zip=${zip}`)
        const house = [];
        if(!houseData) {
            res.status(400).json({message: 'there is no houses with that zipcode'})
        }

        for (i=0; i<10; i++) {
            house.push(houseData.data[i])
        }

        console.log(house)
        res.render('zip', {
            house,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/search/:address' , async (req, res) => {

    try {
        let address = req.params.address
        // let addressJoin = []
        address = address.toUpperCase().split(' ')
        // let address2 = address
        // addressJoin.push(address2.split(' ').join('').toUpperCase())
        // addresJoin.push(address)
        console.log(address)
        // console.log(addressJoin)


        const houseData = await axios.get(`https://data.cityofnewyork.us/resource/wvxf-dwi5.json?housenumber=${address[0]}&streetname=${address[1]} ${address[2]}`)

        
        // console.log(houseData)
        const house = [];

        if(!houseData) {
            res.status(400).json({message: 'there is no houses with that address'});
        }

        
        house.push(houseData.data[0])
       
        console.log(house)

        res.render('house', {
            house,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
    }
    res.render('login');
});


module.exports = router;