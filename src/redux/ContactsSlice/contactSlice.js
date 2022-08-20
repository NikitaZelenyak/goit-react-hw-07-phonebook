
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6300684c34344b6431081b45.mockapi.io' }),
   tagTypes: ['Contact'],
    endpoints: (builder) => ({
      getContacts: builder.query({
          query: () => `/contacts`,
          providesTags :['Contact'],
      }),
        addContact: builder.mutation({
            query: (value) => ({
                url: '/contacts',
                method: 'POST',
                body:value,
            }),
             invalidatesTags: ['Contact'],
        }),
        removeContact:  builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',

            }),
             invalidatesTags: ['Contact'],
        }),
  }),
})


export const { useGetContactsQuery,useAddContactMutation,useRemoveContactMutation  } = contactsApi