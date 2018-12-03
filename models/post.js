module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("Player", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    level: {
      type: DataTypes.INTEGER
    },
    xp: {
      type: DataTypes.INTEGER
    }
  });

  return Player;
};
