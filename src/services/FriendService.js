const Friend = require('../models/Friend');
async function returnAllFriendsFromAccount() {
    return null;
}

async function canAddFriend(loggedInUserId, friendId) {

    return true;
}

async function createFriend(id) {
    console.info("Creating event");
    return await Friend.create({
        userId: id
    }).catch((err) => {
        if (err) {
            console.warn(err);
            return(err);
        }
    });
}

async function canDeleteFriend() {
    return;
}

async function deleteFriend() {
    return;
}

module.exports = {
    returnAllFriendsFromAccount,
    canAddFriend,
    createFriend,
    canDeleteFriend,
    deleteFriend
}
