
const httpErrors = require("http-errors");

module.exports.fetchUser = id => {
    if (id == '001') {
        return Promise.resolve({
            statusCode: 200,
            body: JSON.stringify(
                {
                    "Name ": "Deepak Tarika",
                    "Message ": "Hello Serverless"
                },
                null,
                2
            ),
        });
    } else {
        return Promise.resolve(httpErrors.NotFound());
    }
}