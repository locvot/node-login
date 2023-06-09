const {verifySignUp} = require("../middleware");
const controller = require("../controllers/authControllers");

module.exports = function(app){
    app.post(
        "/api/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail
        ],
        controller.signup
    );
    app.post("/api/auth/signin", controller.signin);
    app.put("/api/auth/changepassword", controller.changepassword);
};

    