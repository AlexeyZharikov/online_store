const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  _id: {
    type: Number,
  },
  status: {
    created: {
      type: Boolean,
      default: true,
      required: true,
    },
    approved:{
      type: Boolean,
      default: false,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
      required: true,
    },
    canceled: {
      type: Boolean,
      default: false,
      required: true,
    }, 
  }
}, {
  timestamps: true,
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;
