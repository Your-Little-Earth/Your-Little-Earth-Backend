const { User } = require('../models');

/*
* This method communicates with the database and will
* retrieve all the users in the database.
* @author Ruben Fricke
*/
function returnAllUser() {
    console.info("Retrieving all users");
    User.findAll().then((users) => {
        return users;
    }).catch((err) => {
        console.log(err);
        return err;
    });
}

/*
* This method communicates with the database and will
* retrieve the user with the specified id in the database.
* @author Ruben Fricke
*/
function returnUserById(id) {
    console.info(`Retrieving user with specified id: ${id}`);
    User.find({
        where: {
            id: id
        }
    }).then((user) => {
        return user;
    }).catch((err) => {
        console.log(err);
        return err;
    })

}

/*
* This method communicates with the database and will
* retrieve the user with the specified email in the database.
* @author Ruben Fricke
*/
function returnUserByEmail(email) {
    console.info(`Retrieving user with specified email: ${email}`);
    User.find({
        where: {
            email: email
        }
    }).then((user) => {
        return user;
    }).catch((err) => {
        console.log(err);
        return err;
    })
}

/*
* This method communicates with the database and will
* create the specified user into the database.
* @author Ruben Fricke
*/
function createUser(user) {
    console.info("Creating user");
    User.create({
        username: user.username,
        email: user.email,
        password: user.password
    }).then((createdUser) => {
        return createdUser;
    }).catch((err) => {
        if (err) {
            console.warn(err);
            return(err);
        }
    });
    return true;
}

/*
* This method communicates with the database and will
* update the user with the specified id.
* @author Ruben Fricke
*/
function updateUser(id, user) {
    console.info(`Updating user with specified id: ${id}`);
    User.update(user, {where: {
        id: id
    }}).then((updatedUser) => {
        return updatedUser;
    }).catch((err) => {
        if (err) {
            console.warn(err);
            return(err);
        }
    });
}

/*
* This method communicates with the database and will
* delete the user with the specified id.
* @author Ruben Fricke
*/
function deleteUser(id) {
    console.info(`Deleting user with specified id: ${id}`);
    User.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    returnAllUser,
    returnUserById,
    returnUserByEmail,
    createUser,
    updateUser,
    deleteUser
}
