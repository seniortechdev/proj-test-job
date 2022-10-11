const Category = require("../models/Category.model");

exports.postCategory = async (req, res) => {
    const { category } = req.body;
    try {
        if (category) {
            const newCategory = new Category({
                ...req.body
            });
            const saved = await newCategory.save();
            if (saved) {
                return res.status(200).json({
                    status: true,
                    message: "Category created successfully",
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


exports.getCategory = async (_req, res) => {
    try {
        const categories = await Category.find()
        if (categories[0]) {
            return res.status(200).json({
                status: true,
                categories,
            });
        } else {
            return res.status(404).json({
                status: false,
                message: 'No category found',
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


exports.deleteCategory = async (_req, res) => {
    try {
      await Category.deleteMany()
      return res.status(200).json({
        status: true,
        message: "Deleted all Category",
    });
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message,
            message: "Something went wrong",
        });
    }
}

