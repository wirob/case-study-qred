import companies from './companies'
import type { Company } from 'src/__generated__/resolvers-types'

class CompanyDataSource {
  getCompany(id: string): Company {
    return companies.find((company) => company.id === id)
  }
}

export { CompanyDataSource, companies }
