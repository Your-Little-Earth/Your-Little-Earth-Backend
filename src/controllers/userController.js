const userService = require('../services/UserService')

/*
* Retrieve all the users stored in the database.
* @author Ruben Fricke
* @route GET api/users
* @access Public
*/
exports.getAllUsers = (req, res) => {
  const posts = userService.getAllUsers();
  return res.status(200).json({
    success: true,
    count: posts.length,
    data: posts,
  });
};

/*
* Retrieve a specific user stored in the database.
* @author Ruben Fricke
* @route GET api/users/{id}
* @access Public
*/
exports.getUserById = (req, res) => {
  const post = userService.getAllUsers().filter(post => post.id === Number(req.params.id));
  console.log(post);
  if (post[0] !== undefined) {
    return res.status(200).json({
      success: true,
      data: post[0],
    });
  }

  return res.status(404).json({
    success: false,
    error: 'No post found',
  })
};

/*
* Creates a new user to store in the database.
* @author Ruben Fricke
* @route POST api/users
* @access Public
*/
exports.createUser = (req, res) => {
  return res.status(404).json({
      success: false,
      error: 'No user found',
    });
};

/*
* Updates an existing user.
* @author Ruben Fricke
* @route PUT api/users/{id}
* @access Public
*/
exports.updateUser = (req, res) => {
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
    return res.status(404).json({
        success: false,
        error: 'No user found',
    });
};
