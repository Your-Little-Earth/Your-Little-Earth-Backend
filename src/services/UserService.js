const userRepository = require('../repositories/UserRepository');

module.exports = {

    /*
    * This method communicates with the repository and will
    * retrieve all the users in the database.
    * @author Ruben Fricke
    */
    getAllUsers() {
        return userRepository.returnAllUser();
    },

    /*
    * This method communicates with the repository and will
    * retrieve the user with the specified id in the database.
    * @author Ruben Fricke
    */
    getUserById(id) {
        return userRepository.returnUserById(id);
    },

    /*
    * This method communicates with the repository and will
    * create the specified user.
    * @author Ruben Fricke
    */
    createUser(user) {
        return userRepository.createUser(user);
    },

    /*
    * This method communicates with the repository and will
    * delete the user with the specified id.
    * @author Ruben Fricke
    */
    deleteUser(id) {
        return userRepository.deleteUser(id);
    },

    /*
    * This method communicates with the repository and will
    * update the user with the specified id.
    * @author Ruben Fricke
    */
    updateUser(id, updatedUser) {
        return userRepository.updateUser(id, updatedUser);
    }
}
