'use strict';
module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define('Card', {
    task: DataTypes.STRING,
    priority: DataTypes.ENUM( 'low', 'medium', 'high' ),
    status: DataTypes.ENUM('on hold', 'in progress', 'done'),
    createdBy: DataTypes.STRING,
    assignedTo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Card;
};