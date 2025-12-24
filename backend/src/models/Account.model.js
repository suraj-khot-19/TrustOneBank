import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    accountNumber: {
        type: Number,
        required: true
    },
    balence: {
        type: Number,
        required: true,
        default: 10000
    },
    accountType: {
        type: String,
        enum: ["saving", "current"],
        default: "saving"
    },
    status: {
        type: String,
        enum: ["active", "blocked"],
        default: "active"
    }
},
    { timeseries: true }
);

export default mongoose.Model('Account', accountSchema)