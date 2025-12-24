import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    transactionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: true
    },
    toAccountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: true
    },
    type: {
        type: String,
        enum: ["debit", "credit"],
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "success", "failed"],
        default: "pending"
    },
    amount: {
        type: Number,
        required: true
    },
    balenceAfterTransaction: {
        type: Number,
        required: true
    }
},
    { timestamp: true }
);

export default mongoose.model('Transaction', transactionSchema)