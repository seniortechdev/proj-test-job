const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
exports.postUser = async (req, res) => {
    const { name, email, phone, password, Subscribed, Channels } = req.body;
    try {
        if (name && email && phone && password) {
            const newUser = new User({
                ...req.body
            });
            const saved = await newUser.save();
            if (saved) {
                return res.status(200).json({
                    status: true,
                    saved
                });
            } else {
                return res.status(500).json({
                    status: false,
                    message: "Something went wrong",
                });
            }
        } else {
            return res.status(400).json({
                status: false,
                message: "bad req",
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message,
            message: "Something went wrong",
        });
    }
}

exports.getUser = async (_req, res) => {
    try {
        const users = await User.find().populate('Subscribed').populate('Channels');
        if (users[0]) {
            return res.status(200).json({
                status: true,
                users,
            });
        } else {
            return res.status(404).json({
                status: false,
                message: 'No user found',
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message,
            message: "Something went wrong",
        });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const {password,email,phone } = req.body;
        if (password) {
            let user;
            if (email) {
                user = await User.find({ email, password }).populate('Subscribed').populate('Channels')
            }
            if (phone) {
                user = await User.find({ phone, password }).populate('Subscribed').populate('Channels')
            }
            if (user) {
                const token =  jwt.sign({ user }, process.env.SECRET_KEY, {
                    expiresIn: "360d"
                  });
                return res.status(200).json({
                    status: true,
                    token,
                    user,
                });
            } else {
                return res.status(400).json({
                    status: false,
                    message: 'required login credentials',
                });
            }
        } else {
            return res.status(400).json({
                status: false,
                message: 'required login credentials',
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message,
            message: "Something went wrong",
        });
    }
}

exports.decoded = async (req, res) => {
    try {
        const {token } = req.body;
        const val =  jwt.verify(token , process.env.SECRET_KEY, {
            expiresIn: "350d"
          });
        return res.status(200).json({
            status: true,
            user:val.user,
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message,
            message: "Something went wrong",
        });
    }
}



exports.deleteUser = async (_req, res) => {
    try {
        await User.deleteMany()
        return res.status(200).json({
            status: true,
            message: "Deleted all users",
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message,
            message: "Something went wrong",
        });
    }
}

