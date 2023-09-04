import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServer } from '@apollo/server'
import { readFileSync } from 'fs'
import resolvers from 'resolvers'
import { TransactionsDataSource } from './datasources/transactionsAPI'

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' })

export interface Context {
  dataSources: {
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
        transactionsAPI: new TransactionsDataSource(),
      },
    }
  },
})

console.log(`🚀  Server ready at: ${url}`)
