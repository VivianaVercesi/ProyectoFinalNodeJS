import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: String,
    password: {
        type: String,
        required: true
    },
     role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})

const User = mongoose.model("User", userSchema);

export default User;