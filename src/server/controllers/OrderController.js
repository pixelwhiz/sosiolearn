const db = require("../models");
const Order = db.order;
const { Op } = require("sequelize");
const midtransClient = require('midtrans-client');

let coreApi = new midtransClient.CoreApi({
    isProduction : false,
    serverKey : 'Mid-server-JrGi57VkRqm3VBLWnSxjHXvd',
    clientKey : 'Mid-client-tFS9qTKZ2zUvFhvQ'
});

exports.charge = function (req, res, next) {
    const { name } = req.body;
    coreApi.charge(req.body).then((response) => {
        var dataOrder = {
            id: response.id,
            name: name,
            response_midtrans: JSON.stringify(response)
        };

        Order.create(dataOrder).then(data => {
            res.json({ status: true, message: "Order Successfully", data: data });
            console.log("success");
        }).catch(err => {
            res.json({ status:false, message: `Error: ${err.message}`, data: "" });
            console.log("failed");
            console.log("Error: ", err.message);
        });
    }).catch((err) => {
        res.json({ status: false, message: `Error: ${err.message}`, data: "" });
        console.log("Error: ", err.message);
    });
};


exports.notifications = async (req, res, next) => {
    try {
        const response = await coreApi.transaction.notification(req.body);
        const orderID = response.order_id;

        const update = await Order.update({ response_midtrans: JSON.stringify(response) }, {
            where: { id: req.body.id }
        });

        res.status(200).json({ status: true, message: "Notification Successfully", data: update });
        console.log("Success");
    } catch (err) {
        res.json({ status: false, message: "Notification Fail" });
        console.log("Internal Server Error: ", err.message);
    }
};