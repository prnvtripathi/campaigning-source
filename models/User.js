import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    name: { type: String },
    image: { type: String, default: "https://photos.app.goo.gl/6B56bM1Xyt1nwEkv6" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactNumber: { type: String, required: true },
    designation: { type: String, required: true },
    socialProfile: { type: String },
    state: { type: String },
    region: { type: String },
    companyName: { type: String },
    college: { type: String },
    course: { type: String },
    services: { type: String },
    createdAt: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, default: false },
}, {
    timestamps: true,
})

export const User = models.users || model('users', UserSchema);