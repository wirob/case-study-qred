import queries from 'resolvers/queries'

describe('runs a test', () => {
  test('one test', () => {
    console.log(queries)
    expect(true).toBe(true)
  })
})
