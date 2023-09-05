import type { Transaction } from 'src/__generated__/resolvers-types'

const transactions: Omit<Required<Transaction>, '__typename'>[] = [
  {
    id: 'af469964-b766-41e7-8249-fa3823ec1f7a',
    amount: 420,
    company: 'e940e673-130a-423f-bd1e-bb471ec13daa',
    date: 1693653066280,
    dateFormatted: '2023-09-02 13:11:06',
  },
  {
    id: 'a56687f2-548b-4848-b47e-667b44a860bc',
    amount: 421,
    company: '4c2a48e2-5585-4463-901e-c0a247556d26',
    date: 1693653182705,
    dateFormatted: '2023-09-02 13:13:02',
  },
]

class TransactionsDataSource {
  getTransactions(id: string): Transaction[] {
    return transactions.filter((transaction) => transaction.id === id)
  }
  getCompanyTransactions(id: string): Transaction[] {
    return transactions.filter((transaction) => transaction.company === id)
  }
}

export { TransactionsDataSource }
