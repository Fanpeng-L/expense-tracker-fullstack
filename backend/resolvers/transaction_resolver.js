import Transaction from "../models/transaction_model.js";

const transactionResolver = {
  Query: {
    transaction: async (_, _, context) => {
      try {
        if (!context.getUser()) {
          throw new Error("Unauthorized user"); //check user auth
        }
        const userId = context.getUser()._id;

        const transactions = await Transaction.find({ userId });
        return transactions;
      } catch (error) {
        console.log("Error getting transactions: ", error);
        throw new Error("Error getting transactions");
      }
    },

    transaction: async (_, { transactionId }) => {
      try {
        const transaction = await Transaction.findById(transactionId);
        return transaction;
      } catch (error) {
        console.log("Error getting transaction: ", error);
        throw new Error("Error getting transaction");
      }
    },
  },

  Mutation: {
    createTransaction: async (_, { input }, context) => {
      try {
        const newTransaction = new Transaction({
          ...input,
          userId: context.getUser()._id, //each transaction is associated with a user
        });
        await newTransaction.save();
        return newTransaction;
      } catch (error) {
        console.log("Error getting transaction: ", error);
        throw new Error("Error getting transaction");
      }
    },

    updateTransaction: async (_, { input }) => {
      try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(
          input.transactionId,
          input,
          { new: true }
        );
        return updatedTransaction;
      } catch (error) {
        console.log("Error getting transaction: ", error);
        throw new Error("Error getting transaction");
      }
    },

    deleteTransaction: async (_, { transactionId }) => {
      try {
        const deletedTransaction = await Transaction.findByIdAndDelete(
          transactionId
        );
        return deletedTransaction;
      } catch (error) {
        console.log("Error getting transaction: ", error);
        throw new Error("Error getting transaction");
      }
    },
  },
};

export default transactionResolver;
