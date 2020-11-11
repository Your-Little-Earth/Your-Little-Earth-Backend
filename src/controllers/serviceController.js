const serviceService = require('../services/serviceService')


exports.getAllServices = (req, res) => {
  const services = serviceService.getAllServices();
  return res.status(200).json({
    success: true,
    count: services.length,
    data: services,
  });
};

exports.getServiceById = (req, res) => {
    let userId = Number(req.params.id);
    if(userId <= 0) {
        return res.status(400).json({
            success: false,
            error: 'The specified userid is invalid.',
        });
    }

    let service = serviceService.getServiceByUserId(userId);
    if (!isEmpty(service)) {
        return res.status(200).json({
            success: true,
            data: service
        });
    }

  return res.status(404).json({
    success: false,
    error: 'No service found with the specified user id.',
  })
};

exports.createService = (req, res) => {
    let serviceToCreate = req.body;
    if (serviceToCreate == null) {
        return res.status(400).json({
            success: false,
            error: 'No service specified to create.'
        });
    }
    let result = serviceService.createService(serviceToCreate);
    return res.status(201).json({
        success: true,
        data: result
    });
};

function isEmpty(obj) {
    return !Object.keys(obj).length;
}
