import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
  smsNum: 'string',
});

export default userSchema;