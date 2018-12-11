module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("Player", {
    googleId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    name: {
      type: DataTypes.STRING
    },
    class: {
      type: DataTypes.STRING
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


