module.exports = {

    /*
    * Creates a mock request used for testing.
    * @author Ruben Fricke
    */
    mockRequest: () => {
      const req = {}
      req.body = jest.fn().mockReturnValue(req)
      req.params = jest.fn().mockReturnValue(req)
      return req
    },

    /*
    * Creates a mock response used for testing.
    * @author Ruben Fricke
    */
    mockResponse: () => {
      const res = {}
      res.send = jest.fn().mockReturnValue(res)
      res.status = jest.fn().mockReturnValue(res)
      res.json = jest.fn().mockReturnValue(res)
      return res
    }
  }
