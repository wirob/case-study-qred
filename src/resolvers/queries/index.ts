import type { QueryResolvers } from '__generated__/resolvers-types'

const queries: QueryResolvers = {
  transactions: async (_, { id }, { dataSources }) => {
    return dataSources.transactionsAPI.getTransactions(id)
  },
}

export default queries
