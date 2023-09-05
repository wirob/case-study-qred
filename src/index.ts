import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServer } from '@apollo/server'
import { readFileSync } from 'fs'
import resolvers from 'src/resolvers'
import { CompanyDataSource, TransactionsDataSource } from 'src/datasources'

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' })

export interface Context {
  dataSources: {
    companyAPI: CompanyDataSource
    transactionsAPI: TransactionsDataSource
  }
}

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    return {
      dataSources: {
        companyAPI: new CompanyDataSource(),
        transactionsAPI: new TransactionsDataSource(),
      },
    }
  },
})

console.log(`🚀  Server ready at: ${url}`)
