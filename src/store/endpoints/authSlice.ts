import { api } from '../api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string; user: any }, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getProfile: builder.query<any, void>({
      query: () => '/auth/profile',
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useGetProfileQuery } = authApi;
