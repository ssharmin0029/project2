const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class House extends Model {}

House.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    violationid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buildingid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    registrationid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    violationstatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    novdescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    approveddate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    communityboard: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    housenumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    streetname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    streetcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    boro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'house',
  }
);

module.exports = House;
