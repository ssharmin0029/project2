const sequelize = require('../config/connection');
const {User, House} = require('../models');

const userData = require('./userData.json');
const houseData = require('./houseData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const house of houseData) {
    await House.create({
      ...house,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
