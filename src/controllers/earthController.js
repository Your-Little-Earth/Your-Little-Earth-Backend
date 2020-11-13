const earthService = require('../services/earthService');
const userService = require('../services/UserService');

exports.getEarthById = async(req, res) => {
    let earthId = Number(req.params.id);
    if(earthId <= 0) {
        return res.status(400).json({
            success: false,
            error: 'The specified id is invalid.',
        });
    }

    let earth = await earthService.getEarthById(earthId);
    if (!isEmpty(earth)) {
        return res.status(200).json(earth);
    }

  return res.status(404).json({
    success: false,
    error: 'No earth found with the specified id.',
  })
}

exports.getEarthByUserId = async(req, res) => {
    let userId = Number(req.params.id);
    if(userId <= 0) {
        return res.status(400).json({
            success: false,
            error: 'The specified id is invalid.',
        });
    }

    if(await userService.getUserById(userId) === null) {
        return res.status(404).json({
            success: false,
            error: 'The specified user could not be found'
        });
    }

    let earth = await earthService.getEarthByUserId(userId);
    if (!isEmpty(earth)) {
        return res.status(200).json(earth);
    }

  return res.status(404).json({
    success: false,
    error: 'No earth found with the specified id.',
  })
}


/*
* Method that checks if an object is empty.
* @author Ruben Fricke
*/
function isEmpty(obj) {
    return !Object.keys(obj).length;
}
