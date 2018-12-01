module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("Player", {
    ID: { type: Sequelize.INTEGER, autoIncrement: true },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    level: {
      type: Sequelize.INTEGER
    },
    xp: {
      type: Sequelize.INTEGER
    }
  });

  Player.associate = function(models) {
    Player.belongsTo(models.Class, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Player;
};
