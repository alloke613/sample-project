const { Service } = require('feathers-mongoose');
// const { axios } = require('axios');

exports.Payments = class Payments extends Service {
    // ax = {}
    // constructor({ axios }) {
    //     super()
    //     this.ax = axios
    // }
    // create(data, params) {
    //     console.log('axios', this.axios)
    //     const { orderId, paymentAmount, paymentStatus } = data;

    //     this.axios.put(`http://localhost:3030/orders/${orderId}`, {
    //         orderStatus: 'paid'
    //     })
    //         .then((result) => {
    //             return {
    //                 "data": "success",
    //                 ...result
    //             }
    //             // if (result) 
    //             // paymentStatus = 'paid'

    //             // const paymentDetails = {
    //             //     orderId: orderId,
    //             //     paymentAmount: paymentAmount,
    //             //     paymentStatus: paymentStatus
    //             // }

    //             // return super.create(paymentDetails, params)
    //         })
    //         .catch((err) => {
    //             return {
    //                 "data": "failed",
    //                 ...err
    //             }
    //         })
    // }
};
