import type { Company } from 'src/__generated__/resolvers-types'

const companies: Omit<Company, '__typename'>[] = [
  {
    id: '4c2a48e2-5585-4463-901e-c0a247556d26',
    name: 'Acme',
  },
  {
    id: 'e940e673-130a-423f-bd1e-bb471ec13daa',
    name: 'Emca',
  },
]

export default companies
