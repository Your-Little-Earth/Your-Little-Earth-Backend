const Earth = require('../models/Earth');
const userRepository = require('../repositories/UserRepository')
const earthRepository = require('../repositories/EarthRepository')

async function updateEarthScore(score) {
    users = await userRepository.returnAllUser();
    users.forEach(element => {
        if(score > 0){
            rand = Math.round(Math.random()*100 - 50)
            console.log(rand)
            if(rand <= element.dataValues.Earth.dataValues.score){
                update(element, score)
            }
        }
        else{
            rand = Math.round(Math.random()*100 - 50)
            console.log(rand)
            if(rand <= (element.dataValues.Earth.dataValues.score - 100)){
                update(element, score)
            }
        }
    });
}

async function getEarthById(id) {
    return earthRepository.returnEarthById(id);
}

async function getEarthByUserId(id) {
    let user = await userRepository.returnUserById(id);
    var earth = user.dataValues.Earth.dataValues;
    return earth;
}

async function updateEarthScoreNow(user, score) {
    update(user, score)
}


async function update(user, score){
    console.log(user)
    user.dataValues.Earth.dataValues.score += score
    await earthRepository.updateEarth(user.dataValues.Earth.dataValues.id, user.dataValues.Earth)
}


module.exports = {
    updateEarthScore,
    updateEarthScoreNow,
    getEarthByUserId,
    getEarthById
}
