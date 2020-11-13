const userRepository = require('../repositories/UserRepository');
const earthRepository = require('../repositories/EarthRepository');
const bcrypt = require('bcrypt');

/*
* This method communicates with the repository and will
* retrieve all the users in the database.
* @author Ruben Fricke
*/
async function getAllUsers() {
    let users = await userRepository.returnAllUser();
    return users;
}

/*
* This method communicates with the repository and will
* create the specified user.
* @author Ruben Fricke
*/
async function createUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;

    let createdUser = await userRepository.createUser(user);
    await earthRepository.createEarth({name : createdUser.dataValues.username + '\'s Earth', score : 0}, createdUser.dataValues)
    return createUser;
}

/*
* This method communicates with the repository and will
* retrieve the user with the specified id in the database.
* @author Ruben Fricke
*/
async function getUserById(id) {
    let foundUser = userRepository.returnUserById(id);
    return foundUser;
}

/*
* This method communicates with the repository and will
* delete the user with the specified id.
* @author Ruben Fricke
*/
async function deleteUser(id) {
    return await userRepository.deleteUser(id);
}

/*
* This method communicates with the repository and will
* update the user with the specified id.
* @author Ruben Fricke
*/
async function updateUser(id, updatedUser) {
    return await userRepository.updateUser(id, updatedUser);
}

async function validateLoginCredentials(email, password) {
    let user = await userRepository.returnUserByEmail(email);
    user = user.dataValues;

    if(user == null) return {status: false};
    if (!await bcrypt.compare(password, user.password)) return {status: false};
    return {
        status: true,
        data: user
    };
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser,
    validateLoginCredentials
}
