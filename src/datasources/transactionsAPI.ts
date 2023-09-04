import type { Transaction } from '../__generated__/resolvers-types'

const transactions: Omit<Required<Transaction>, '__typename'>[] = [
  {
    id: '43425',
    amount: 420,
    date: 1693653066280,
    dateFormatted: '2023-09-02 13:11:06',
  },

  {
    id: '43425',
    amount: 421,
    date: 1693653182705,
    dateFormatted: '2023-09-02 13:13:02',
  },
]

class TransactionsDataSource {
  getTransactions(id: string): Transaction[] {
    return transactions.filter((transaction) => transaction.id === id)
  }
}

export { TransactionsDataSource }