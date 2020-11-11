const { User } = require('../models');

const userArray = [
    {
        id: 1,
        username: 'lUrRrRrSsSsSSSSS',
        email: 'mrvunurp@urp.urp',
        password: 'Hashed_urpp_password'
    },
    {
        id: 2,
        username: 'lUrRrRrSsSsSSSSS',
        email: 'mrgsdgd@urp.urp',
        password: 'Hashed_urdgfp_password'
    },
    {
        id: 3,
        username: 'lUrRrRrSsSsSSSSS',
        email: 'mrvundgsg@urp.urp',
        password: 'Hashed_fdgfp_password'
    },
    {
        id: 4,
        username: 'lUrRrsfergSSSSS',
        email: 'mrgdsgurp@urp.urp',
        password: 'Hashed_udfd_password'
    },
];

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
    let index = userArray.findIndex(user => user.id == id);
    userArray[index] = user;
}

/*
* This method communicates with the database and will
* delete the user with the specified id.
* @author Ruben Fricke
*/
function deleteUser(id) {
    console.info(`Deleting user with specified id: ${id}`);
    let index = userArray.findIndex(user => user.id == id);
    userArray.splice(index, 1);
}

module.exports = {
    returnAllUser,
    returnUserById,
    returnUserByEmail,
    createUser,
    updateUser,
    deleteUser
}
