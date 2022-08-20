

import { configureStore } from '@reduxjs/toolkit'

import { contactsApi } from './ContactsSlice/contactSlice'

export const store = configureStore({
  reducer: {

    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
  contactsApi.middleware]

})


