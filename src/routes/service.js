const express = require('express');
const router = express.Router();

// Controller Methods
const {
    getAllServices,
    getServiceById,
    createService
    } = require('../controllers/serviceController');

    // router.route('/car')
    //  .get(getAllServices)
    //  .post(createService);

    router.route('/car/:id')
     .get(getServiceById)

module.exports = router;
