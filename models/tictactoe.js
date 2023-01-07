module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tictactoe', {
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    winRecord: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    lossRecord: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    drawRecord: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,

    }
  })
}