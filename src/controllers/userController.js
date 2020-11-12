const userService = require('../services/UserService')

/*
* Retrieve all the users stored in the database.
* @author Ruben Fricke
* @route GET api/users
* @access Public
*/
exports.getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json({
    success: true,
    length: users.length,
    data: users,
  });
};

/*
* Retrieve a specific user stored in the database.
* @author Ruben Fricke
* @route GET api/users/{id}
* @access Public
*/
exports.getUserById = async (req, res) => {
    let userId = Number(req.params.id);
    if(userId <= 0) {
        return res.status(400).json({
            success: false,
            error: 'The specified id is invalid.',
        });
    }

    let user = await userService.getUserById(userId);
    if (!isEmpty(user)) {
        return res.status(200).json({
            success: true,
            data: user
        });
    }

  return res.status(404).json({
    success: false,
    error: 'No user found with the specified id.',
  })
};

/*
* Creates a new user to store in the database.
* @author Ruben Fricke
* @route POST api/users
* @access Public
*/
exports.createUser = async (req, res) => {
    let userToCreate = req.body;
    if (userToCreate == null) {
        return res.status(400).json({
            success: false,
            error: 'No user specified to create.'
        });
    }
    let result = await userService.createUser(userToCreate);
    return res.status(201).json({
        success: true,
        data: result
    });
};

/*
* Updates an existing user.
* @author Ruben Fricke
* @route PUT api/users/{id}
* @access Public
*/
exports.updateUser = async (req, res) => {
    let userId = Number(req.params.id);
    if(userId <= 0) {
        return res.status(400).json({
            success: false,
            error: 'The specified id is invalid.',
        });
    }
    let updatedUser = await userService.updateUser();
    return res.status(200).json({
        success: true,
        data: updatedUser
    });
};

/*
* Deletes an existing user.
* @author Ruben Fricke
* @route DELETE api/users/{id}
* @access Public
*/
exports.deleteUser = async (req, res) => {
    if(req.params.id <= 0) {
        return res.status(400).json({
            success: false,
            error: 'The specified id is invalid.',
        });
    }

    let foundUser = await userService.getUserById(req.params.id);

    if (isEmpty(foundUser)) {
        await userService.deleteUser();
        return res.status(200).json({
            success: true,
            data: foundUser
        });
    }

  return res.status(404).json({
    success: false,
    error: 'No user found with the specified id.',
  })
};

/*
* Method that checks if an object is empty.
* @author Ruben Fricke
*/
function isEmpty(obj) {
    return !Object.keys(obj).length;
}
