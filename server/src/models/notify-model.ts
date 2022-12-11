import mongoose from './index.js';

const notificationSchema = new mongoose.Schema({

  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  delay: {
    type: Number,
    required: true
  }

}, {collection: 'user-notify'});

export default mongoose.model('user-notify', notificationSchema);