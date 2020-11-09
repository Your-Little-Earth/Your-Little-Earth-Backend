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
        email: 'mrvunurp@urp.urp',
        password: 'Hashed_urpp_password'
    },
    {
        id: 3,
        username: 'lUrRrRrSsSsSSSSS',
        email: 'mrvunurp@urp.urp',
        password: 'Hashed_urpp_password'
    },
    {
        id: 4,
        username: 'lUrRrRrSsSsSSSSS',
        email: 'mrvunurp@urp.urp',
        password: 'Hashed_urpp_password'
    },
];

module.exports = {
    /*
    * This method communicates with the database and will
    * retrieve all the users in the database.
    * @author Ruben Fricke
    */
    returnAllUser() {
        console.info("Retrieving all users");
        return userArray;
    },

    /*
    * This method communicates with the database and will
    * retrieve the user with the specified id in the database.
    * @author Ruben Fricke
    */
    returnUserById(id) {
        console.info(`Retrieving user with specified id: ${id}`);
        return userArray.filter(user => user.id == id);
    },

    /*
    * This method communicates with the database and will
    * create the specified user into the database.
    * @author Ruben Fricke
    */
    createUser(user) {
        console.info("Creating user");
        userArray.push(user);
    },

    /*
    * This method communicates with the database and will
    * update the user with the specified id.
    * @author Ruben Fricke
    */
    updateUser(id, user) {
        console.info(`Updating user with specified id: ${id}`);
        let index = userArray.findIndex(user => user.id == id);
        userArray[index] = user;
    },

    /*
    * This method communicates with the database and will
    * delete the user with the specified id.
    * @author Ruben Fricke
    */
    deleteUser(id) {
        console.info(`Deleting user with specified id: ${id}`);
        let index = userArray.findIndex(user => user.id == id);
        userArray.splice(index, 1);
    }
}