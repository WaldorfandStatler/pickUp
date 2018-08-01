import mongoose from 'mongoose';
const userSchema = mongoose.Schema(
  { smsNum:[String] }, { usePushEach: true }
);

export default userSchema;