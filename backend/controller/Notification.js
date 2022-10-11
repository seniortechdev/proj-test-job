const Notification = require("../models/Logs.model");
const User = require("../models/User.model");
const Channel = require("../models/Channel.model");

exports.postNotification = async (req, res) => {
    const { category, message, user } = req.body;
    try {
        if (category && message && user._id) {
            const users = await User.find({ Subscribed:category });
            users.forEach(user => {
                user.Channels.map(async (item) => {
                    const getChannel = await Channel.findOne({ _id: item })
                    const newNotification = new Notification({
                        sendTo: user._id,
                        message,
                        category,
                        channel: item,
                        sendBy: user._id,
                        sentOn: getChannel.channel === 'SMS' ? "Message" : getChannel.channel === 'E-Mail' ? 'Mail' : 'Notification'
                    });
                    await newNotification.save();
                })
            })
            return res.status(200).json({
                status: true,
                message: "Notification created successfully",
            });
        } else {
            return res.status(400).json({
                status: false,
                message: "bad req",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            error: error.message,
            message: "Something went wrong",
        });
    }
}

exports.getNotification = async (_req, res) => {
    try {
        const notifications = await Notification.find().populate('sendBy').populate('sendTo').populate('category').populate('channel').populate({
            path: 'sendTo',
            populate: { path: 'Channels' }
        }).sort('-createdAt')
        if (notifications[0]) {
            return res.status(200).json({
                status: true,
                notifications,
            });
        } else {
            return res.status(404).json({
                status: false,
                message: 'No notification found',
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

exports.getNotificationByUserId = async (req, res) => {
    try {
        const id = req.params.id;
        const notifications = await Notification.find({ sendTo: id }).populate('sendBy').populate('sendTo').populate('sendTo.Channels').populate('category').sort('-createdAt')
        if (notifications[0]) {
            return res.status(200).json({
                status: true,
                notifications,
            });
        } else {
            return res.status(404).json({
                status: false,
                message: 'No notification found',
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





exports.deleteNotification = async (_req, res) => {
    try {
        await Notification.deleteMany()
        return res.status(200).json({
            status: true,
            message: "Deleted all Notification",
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message,
            message: "Something went wrong",
        });
    }
}

