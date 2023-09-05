import resolvers from '@App/resolvers'

describe('Resolvers', () => {
  it('Has correct properties', () => {
    expect(resolvers).toHaveProperty('Query')
    expect(resolvers).toHaveProperty('Company')
  })

  describe('Query', () => {
    it('has correct properties', () => {
      expect(resolvers.Query).toHaveProperty('company')
      expect(resolvers.Query).toHaveProperty('transactions')
    })
  })
})
