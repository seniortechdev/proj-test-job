const jwt = require("jsonwebtoken");

exports.VerifyUser = async (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (!bearerHeader) {
        return res.status(503).json({
            status: false,
            message: "Auth required",
        });
    }
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const { user } = jwt.verify(bearerToken, process.env.SECRET_KEY, {
        expiresIn: "360d"
    });
    if (!user[0]._id) {
        return res.status(503).json({
            status: false,
            message: "invalid auth",
        });
    }
    req.body.user = user[0];
    next()
}