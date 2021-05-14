const router = require('express').Router();
const { House } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newHouse = await House.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newHouse);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const houseData = await House.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!houseData) {
      res.status(404).json({ message: 'No house found with this id!' });
      return;
    }

    res.status(200).json(houseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
