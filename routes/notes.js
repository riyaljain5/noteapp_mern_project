const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  // You can add more fields as needed
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Note model using the schema
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;