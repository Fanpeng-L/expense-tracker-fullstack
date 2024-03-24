import mongoose from "mongoose";
const { Schema } = mongoose;

const transactionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, //refer to userId
    required: true,
    ref: "User", //refer to userId
  },
  description: { type: String, required: true },
  paymentType: { type: String, required: true, enum: ["cash", "card"] },
  category: {
    type: String,
    required: true,
    enum: ["saving", "expense", "investment"],
  },
  amount: { type: Number, required: true },
  location: { type: String, default: "Unknown" },
  date: { type: Date, required: true },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
