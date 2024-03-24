import { mergeResolvers } from "@graphql-tools/merge";
import transactionResolver from "./transaction_resolver.js";
import userResolver from "./user_resolver.js";

// merge all the resolvers
const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

export default mergedResolvers;
