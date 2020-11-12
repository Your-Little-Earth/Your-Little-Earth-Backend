const friendService = require('../services/FriendService');
const userService = require('../services/UserService');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.getAllFriends = async (req, res) => {
    let friends = await friendService.returnAllFriendsFromAccount(req.params.id);
    return res.status(200).json({
        success: true,
        length: friends.length,
        data: friends.data
    });
};

exports.addFriend = async (req, res) => {
    let friendToAdd = req.body.id;
    let currentId = jwt.verify(req.headers["authorization"].split(' ')[1], process.env.ACCES_TOKEN_SECRET).id;
    console.log(currentId)
    console.log(friendToAdd)
    if(friendToAdd <= 0 || friendToAdd === undefined) {
        return res.status(400).json({
            success: false,
            error: 'No friend specified to add'
        });
    }

    if(userService.getUserById(friendToAdd) === (null || undefined)) {
        return res.status(404).json({
            success: false,
            error: 'The specified friend could not be found'
        });
    }

    if(!friendService.canAddFriend(currentId, friendToAdd)) {
        return res.status(400).json({
            success: false,
            error: 'The friend could not be added'
        });
    }

    let addedFriend = await friendService.createFriend(friendToAdd);
    return res.status(201).json({
        success: true,
        data: addedFriend
    });
};

exports.deleteFriend = async (req, res) => {
    let friendToDelete = req.params.id;
    if(friendToDelete <= 0 || friendToDelete === undefined) {
        return res.status(400).json({
            success: false,
            error: 'No friend specified to delete'
        });
    }

    if(!friendService.canDeleteFriend(friendToAdd)) {
        return res.status(400).json({
            success: false,
            error: 'The friend could not be deleted'
        });
    }

    friendService.deleteFriend(friendToDelete);
    return res.status(200).json({
        success: true
    })
};
