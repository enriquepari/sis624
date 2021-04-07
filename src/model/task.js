const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  name: String,
  monto: String,
  
});

module.exports = mongoose.model('tasks', TaskSchema);
