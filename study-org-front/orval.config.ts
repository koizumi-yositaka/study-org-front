import { faker } from '@faker-js/faker';
import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    output: {
      mode: 'split',
      target: 'src/api/endpoints/testGen.ts',
      schemas: 'src/api/model',
      client: 'react-query',
      mock: true,
      prettier: true,
      override: {
        mutator: {
          path: './use-custom-instance.ts',
          name: 'useCustomInstance',
        },
        query: {
           useSuspenseQuery: true,
           version: 5,
           options: {
             staleTime: 30000 // Default `staleTime` for queries (e.g., 5 minutes)
           }
         },
      }
    },
    input: {
      target: './api-schema.yml'
    },
  },
});