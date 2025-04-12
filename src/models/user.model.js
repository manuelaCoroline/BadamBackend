import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String, enum: ['apprenti', 'formateur'], default: 'apprenti' },
  
    location: {
        address: { type: String },
        city: { type: String },
        province: { type: String },
        country: { type: String },
        postalCode: { type: String },
    }
  });
  

const User = mongoose.model("User", UserSchema);
export default User;