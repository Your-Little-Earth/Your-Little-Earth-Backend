jest.mock('../services/userService');

const { mockRequest, mockResponse } = require('../utils/interceptor');
const controller = require('../controllers/userController');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../services/UserService');

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

describe("Check the getUserById method in the UserController", () => {

    /*
    * Test the getUserById method whenever the
    * user exists in the database.
    * @author Ruben Fricke
    */
    test('Get the user whenever the user exists', () => {
        let req = mockRequest();
        req.params.id = 1;
        let res = mockResponse();
        let returnedUser = userArray.filter(user => user.id == req.params.id);

        getUserById.mockReturnValueOnce(returnedUser);

        controller.getUserById(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(getUserById).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            "success": true,
            "data": returnedUser
        });
    });

    /*
    * Test the getUserById method whenever the
    * specified id is invalid.
    * @author Ruben Fricke
    */
    test('Get the user whenever the id is invalid', () => {
        let req = mockRequest();
        req.params.id = Number.MIN_SAFE_INTEGER;
        let res = mockResponse();
        let returnedUser = userArray.filter(user => user.id == req.params.id);

        getUserById.mockReturnValueOnce(returnedUser);

        controller.getUserById(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(getUserById).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            "success": false,
            "error": 'The specified id is invalid.'
        });
    });

    /*
    * Test the getUserById method whenever the
    * a user with the specified id doesn't exist.
    * @author Ruben Fricke
    */
    test("Get the user whenever the user doesn't exist", () => {
        let req = mockRequest();
        req.params.id = Number.MAX_SAFE_INTEGER;
        let res = mockResponse();
        let returnedUser = userArray.filter(user => user.id == req.params.id);

        getUserById.mockReturnValueOnce(returnedUser);

        controller.getUserById(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(getUserById).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            "success": false,
            "error": 'No user found with the specified id.'
        });
    });
});

describe("Check the createUser method in the UserController", () => {

    /*
    * Test the createUser method whenever there is
    * no user specified in the body.
    * @author Ruben Fricke
    */
    test('Create the user whenever the body is invalid.', () => {
        let req = mockRequest();
        req.body = null;
        let res = mockResponse();

        controller.createUser(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(createUser).not.toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            'success': false,
            'error': 'No user specified to create.'
        });
    });

    /*
    * Test the createUser method whenever there is
    * a valid specified user in the body.
    * @author Ruben Fricke
    */
    test('Create the user whenever the body is valid.', () => {
        let req = mockRequest();
        req.body = {
            username: 'New user',
            email: 'user@mail.com',
            password: '5a598edac7133a65ae8f38fdabe1d8ae'
        };
        let res = mockResponse();

        let returnObject = req.body['id'] = Math.max.apply(Math, userArray.map(function(o) {return o.id})) + 1;
        createUser.mockReturnValueOnce(returnObject);

        controller.createUser(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(createUser).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            'success': true,
            'data': returnObject
        });
    });
});

describe("Check the updateUser method in the UserController", () => {

    /*
    * Test the updateUser method whenever there is
    * no valid id specified in the body.
    * @author Ruben Fricke
    */
    test('Update the user whenever the id is invalid.', () => {
        let req = mockRequest();
        req.params.id = Number.MIN_SAFE_INTEGER;
        let res = mockResponse();

        controller.updateUser(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(updateUser).not.toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            'success': false,
            'error': 'The specified id is invalid.'
        });
    });

    /*
    * Test the updateUser method whenever the body is valid.
    * @author Ruben Fricke
    */
    test('Update the user whenever the id is valid.', () => {
        let req = mockRequest();
        req.params.id = 1;
        req.params.body = {
            username: 'Updated user',
            email: 'user@mail.com',
            password: 'f64ff3c172fe566cc98748a600560566'
        };
        let res = mockResponse();

        let returnObject = userArray.filter(user => user.id == req.params.id);
        returnObject[0].username = req.params.body.username;
        returnObject[0].email = req.params.body.email;
        returnObject[0].password = req.params.body.password;

        updateUser.mockReturnValueOnce(returnObject);

        controller.updateUser(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(updateUser).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            'success': true,
            'data': returnObject
        });

    });
});

// describe("Check the deleteUser method in the UserController", () => {

//     /*
//     * Test the deleteUser method whenever the specified id is valid.
//     * @author Ruben Fricke
//     */
//     test('Delete the user whenever the id is valid.', () => {
//         let req = mockRequest();
//         req.params.id = 2;
//         let res = mockResponse();

//         let returnedUser = userArray.filter(user => user.id == req.params.id);
//         getUserById.mockReturnValueOnce(returnedUser);

//         controller.deleteUser(req, res);

//         expect(res.status).toHaveBeenCalledWith(200);
//         expect(deleteUser).toHaveBeenCalled();
//         expect(res.json).toHaveBeenCalledWith({
//             "success": true
//         });
//     });

//     /*
//     * Test the deleteUser method whenever the specified id is invalid.
//     * @author Ruben Fricke
//     */
//     test('Delete the user whenever the id is invalid.', () => {
//         let req = mockRequest();
//         req.params.id = Number.MIN_SAFE_INTEGER;
//         let res = mockResponse();

//         controller.deleteUser(req, res);

//         expect(res.status).toHaveBeenCalledWith(400);
//         expect(deleteUser).not.toHaveBeenCalled();
//         expect(res.json).toHaveBeenCalledWith({
//             'success': false,
//             'error': 'The specified id is invalid.',
//         });
//     });

//     /*
//     * Test the deleteUser method whenever the user could not
//     * be found with the specified id..
//     * @author Ruben Fricke
//     */
//     test('Delete the user whenever the user could not be found.', () => {
//         let req = mockRequest();
//         req.params.id = Number.MAX_SAFE_INTEGER;
//         let res = mockResponse();

//         let returnedUser = userArray.filter(user => user.id == req.params.id);
//         getUserById.mockReturnValueOnce(returnedUser);
//         deleteUser.mockReturnValueOnce();

//         controller.deleteUser(req, res);

//         expect(res.status).toHaveBeenCalledWith(404);
//         expect(deleteUser).toHaveBeenCalled();
//         expect(res.json).toHaveBeenCalledWith({
//             'success': false,
//             'error': 'No user found with the specified id.',
//         });
//     });
// });
