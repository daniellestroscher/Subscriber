import mongoose from './index.js';

const subSchema = new mongoose.Schema({

  icon: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: false
  },
  start: {
    type: Date,
    required: true
  },
  prettyStart: {
    type: String,
    required: true
  },
  cycle: {
    type: String,
    required: true
  },
  reminderDate: {
    type: Date,
    required: true
  }

}, {collection: 'subscriptions'});

export default mongoose.model('subscriptions', subSchema);