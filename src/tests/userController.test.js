jest.mock('../services/userService');

const { mockRequest, mockResponse } = require('../utils/interceptor');
const controller = require('../controllers/userController');
const { getAllUsers } = require('../services/UserService');

const userArray = [
    {
        id: 1,
        username: 'Henry',
        email: 'h.enry@mail.com',
        password: '179909b745f81f03f177a3079e0ce5e3'
    },
    {
        id: 2,
        username: 'Stan',
        email: 'stan@mail.com',
        password: '3ffa4a71a5aa791a8bc3409f5b15b936'
    }
];

describe("Check the GetAllUsers method in the UserController", () => {

    /*
    * Test the GetAllUsers method whenever there are no users.
    * @author Ruben Fricke
    */
    test('Getting all users whenever there are no users', () => {
        let req = mockRequest();
        let res = mockResponse();

        getAllUsers.mockReturnValueOnce([]);

        controller.getAllUsers(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(getAllUsers).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            "count": 0,
            "data": [],
            "success": true
        });
    });

    /*
    * Test the GetAllUsers method whenever there are
    * users stored in the database.
    * @author Ruben Fricke
    */
    test('Getting all users whenever there are users', () => {
        let req = mockRequest();
        let res = mockResponse();

        getAllUsers.mockReturnValueOnce(userArray);

        controller.getAllUsers(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(getAllUsers).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            "count": 2,
            "data": userArray,
            "success": true
        });
    });
});
