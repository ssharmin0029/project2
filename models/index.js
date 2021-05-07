const User = require('./User');
const Profile = require('./Profile')


User.hasOne(Profile, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Profile.belongsTo(User, {
    foreignKey: 'id'
});

module.exports = { User, Profile }
