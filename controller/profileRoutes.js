const router = require('express').Router();
const { User, House } = require( '../models' )
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {
    try {
        const profileData = await User.findByPk(req.session.user_id, {
            attributes: {
                exclude: ['password']
            },

            include: 
                {
                    model: House
                },
            
        });
        
        const profile = profileData.get({plain: true})

        res.render('profile', {
            ...profile,
            logged_in: true
        });

    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;