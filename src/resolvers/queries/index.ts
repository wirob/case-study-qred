import type { QueryResolvers } from 'src/__generated__/resolvers-types'

const queries: QueryResolvers = {
  transactions: async (parent, _, { dataSources }) => {
    return dataSources.transactionsAPI.getTransactions()
  },
  company: async (parent, { id }, { dataSources }) => {
    return dataSources.companyAPI.getCompany(id)
  }
}

export default queries
