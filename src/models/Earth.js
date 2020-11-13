const Chunk = require("./Chunk");

module.exports = (sequelize, DataTypes) => {
    const Earth = sequelize.define("Earth", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    Earth.associate = models => {
        Earth.hasMany(models.Chunk, {
            onDelete: 'CASCADE'
        });
    }

    Earth.associate = models => {
        Earth.belongsTo(models.User, {
            foreignKey: 'userId',
        })
    }

    return Earth;
};
