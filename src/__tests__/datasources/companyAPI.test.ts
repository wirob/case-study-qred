import { CompanyDataSource } from '@App/datasources/companyAPI'
import companies from '@App/datasources/companies'

describe('CompanyDataSource', () => {
  describe('getCompany', () => {
    it('returns company based on ID', () => {
      const companyAPI = new CompanyDataSource()

      expect(companyAPI.getCompany(companies[0].id)).toBe(companies[0])
    })
  })
})
