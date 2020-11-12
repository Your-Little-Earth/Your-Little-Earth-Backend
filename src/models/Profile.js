module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("Profile", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    Profile.associate = (models) => {
        Profile.belongsToMany(models.User)
    }

    return Profile;
};
