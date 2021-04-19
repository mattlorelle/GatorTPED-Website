import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  major: {type: String, required: false },
  gradYear: {type: String, required: false},
  clubPosition: {type: String, required: false},
  isAdmin: {type: Boolean, required: false},
  id: { type: String },
});

export default mongoose.model("User", userSchema);