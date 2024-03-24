import { mergeGraphQLTypes } from "@graphql-tools/merge";
import userTypeDef from "./user_typeDef.js";
import transactionTypeDef from "./transaction_typeDef.js";

// merge all the TypeDefs (for better modularity)
const mergedTypeDefs = mergeGraphQLTypes([userTypeDef, transactionTypeDef]);

export default mergedTypeDefs;
