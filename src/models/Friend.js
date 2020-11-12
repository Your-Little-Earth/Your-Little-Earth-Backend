const User = require("./User");

module.exports = (sequelize, DataTypes) => {
    const Friend = sequelize.define("Friend", {
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    return Friend;
};
