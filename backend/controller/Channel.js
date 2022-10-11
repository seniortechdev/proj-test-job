const Channel = require("../models/Channel.model");

exports.postChannel = async (req, res) => {
    const { channel } = req.body;
    try {
        if (channel) {
            const newChannel = new Channel({
                ...req.body
            });
            const saved = await newChannel.save();
            if (saved) {
                return res.status(200).json({
                    status: true,
                    message: "Channel created successfully",
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


exports.getChannel = async (_req, res) => {
    try {
        const channels = await Channel.find()
        if (channels[0]) {
            return res.status(200).json({
                status: true,
                channels,
            });
        } else {
            return res.status(404).json({
                status: false,
                message: 'No channel found',
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


exports.deleteCannel = async (_req, res) => {
    try {
      await Channel.deleteMany()
      return res.status(200).json({
        status: true,
        message: "Deleted all Channels",
    });
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message,
            message: "Something went wrong",
        });
    }
}

