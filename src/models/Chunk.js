module.exports = (sequelize, DataTypes) => {
    const Chunk = sequelize.define("Chunk", {
        state: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    Chunk.associate = models => {
        Chunk.belongsTo(models.Earth, {

        });
    }

    return Chunk;
};
