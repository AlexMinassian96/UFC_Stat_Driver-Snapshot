import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

const fighterServerApi = createApi({
    reducerPath: 'figherServerApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    endpoints: builder => ({
        getFighters: builder.query({
            query: () => 'fighters'
        })
    })
  });

export default fighterServerApi;
