const userService = require('../services/UserService')

/*
* Retrieve all the users stored in the database.
* @author Ruben Fricke
* @route GET api/users
* @access Public
*/
exports.getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  return res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
};

/*
* Retrieve a specific user stored in the database.
* @author Ruben Fricke
* @route GET api/users/{id}
* @access Public
*/
exports.getUserById = (req, res) => {
    let userId = Number(req.params.id);
    if(userId <= 0) {
        return res.status(400).json({
            success: false,
            error: 'The specified id is invalid.',
        })
    }

    let user = userService.getUserById(userId);
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
exports.createUser = (req, res) => {
    let userToCreate = req.body;
    if (userToCreate == null) {
        return res.status(400).json({
            success: false,
            error: 'No user specified to create.'
        });
    }
    let result = userService.createUser(userToCreate);
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
exports.updateUser = (req, res) => {
    userService.updateUser();
    return res.status(404).json({
        success: false,
        error: 'No user found',
    });
};

/*
* Deletes an existing user.
* @author Ruben Fricke
* @route DELETE api/users/{id}
* @access Public
*/
exports.deleteUser = (req, res) => {
    userService.deleteUser();
    return res.status(404).json({
        success: false,
        error: 'No user found',
    });
};

function isEmpty(obj) {
    return !Object.keys(obj).length;
}
