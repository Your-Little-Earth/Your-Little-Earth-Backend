jest.mock('../services/userService');

const { mockRequest, mockResponse } = require('../utils/interceptor');
const controller = require('../controllers/userController');
const { getAllUsers } = require('../services/UserService');

describe("Check the GetAllUsers method in the UserController", () => {

    /*
    * Test the GetAllUsers method whenever there are no users
    * @author Ruben Fricke
    */
    test('Getting all user whenever there are no users', () => {
        let req = mockRequest();
        let res = mockResponse();

        getAllUsers.mockReturnValueOnce([]);

        controller.getAllUsers(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            "count": 0,
            "data": [],
            "success": true});
        expect(getAllUsers).toHaveBeenCalled();
    });
});
