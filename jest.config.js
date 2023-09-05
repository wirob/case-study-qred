import { pathsToModuleNameMapper } from 'ts-jest'
import tsconfig from './tsconfig.json' assert { type: 'json' }

const { paths, baseUrl } = tsconfig.compilerOptions

const jestConfig = {
  roots: ['<rootDir>'],
  modulePaths: [baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(paths),
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        useESM: true,
        isolatedModules: true,
      },
    ],
  },
}

export default jestConfig
