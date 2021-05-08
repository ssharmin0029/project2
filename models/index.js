const User = require('./User');
const House = require('./House')


User.hasMany(House, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

House.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, House}
