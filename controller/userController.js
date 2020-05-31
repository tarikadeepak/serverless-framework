const userProfile = require("../src/services/userProfile")

module.exports.getUser = event => {
    return new Promise((resolve, reject) => {
        userProfile.fetchUser(event.pathParameters.id)
        .then((value) => {
            console.log("Resolve Value ", value)
            resolve(value);})
        .catch((error) => {
            console.log("Reject Error ", error)
            reject(error);
        })
    })
}