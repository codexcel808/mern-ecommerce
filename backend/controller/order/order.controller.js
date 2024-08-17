const orderModel = require("../../models/orderProductModel");

const orderController = async(req, res) => {
    try {
        const currentUserId = req.userId;
        const orderList = await orderModel.find({userId : currentUserId}).sort({createdAt : -1});
        
        res.json({
            message: "Order List",
            data: orderList,
            success: true,
         });
        }
        
    catch (error) {
        return res.status(400).json({
             message: error.message || error,
             error : true
         });
    }}
     
    module.exports = orderController;  