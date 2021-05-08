const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');

class House extends Model {}

Houses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    violationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buildingID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    registrationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    violationStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    novDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    approvedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    streetName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    streetCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    houseNumber: {
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'House',
  }
);

module.exports = House;
