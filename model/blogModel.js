module.exports = (sequelize, DataTypes) => {
    const blog = sequelize.define("blogs", {
      Title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return blog;
  };