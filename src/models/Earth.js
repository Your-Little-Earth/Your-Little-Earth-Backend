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
        temperature: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        sea_level: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        carbonDioxideAmount: {
            type: DataTypes.FLOAT,
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

    return Earth;
};
