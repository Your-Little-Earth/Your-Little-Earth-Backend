const Earth = require('../models/Earth');
const userRepository = require('../repositories/UserRepository')

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

async function updateEarthScoreNow(score,user) {
    update(user, score)
}


function update(user, score){
    user.dataValues.Earth.dataValues.score += score
    userRepository.updateEarth(user.dataValues.Earth.dataValues.id, user.dataValues.Earth)
}


module.exports = {
    updateEarthScore,
    updateEarthScoreNow
}
