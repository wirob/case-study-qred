import queries from 'src/resolvers/queries'
import type { Resolvers } from 'src/__generated__/resolvers-types'

const resolvers: Resolvers = {
  Query: queries,
  Company: {
    transactions: (parent, args, { dataSources }) => {
      return dataSources.transactionsAPI.getCompanyTransactions(parent.id)
    },
  },
}

export default resolvers
