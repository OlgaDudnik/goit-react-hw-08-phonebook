import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from './contactsOperations';

const initialState = {
  contacts: [],
  isLoading: false,
  isRefreshing: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [addContact.pending](state) {
      state.isRefreshing = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.contacts.push(payload);
      state.isRefreshing = false;
    },
    [addContact.rejected](state) {
      state.isRefreshing = false;
    },
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.contacts = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state) {
      state.isLoading = false;
    },

    [deleteContact.fulfilled](state, { payload }) {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },

    [changeContact.fulfilled](state, { payload }) {
      state.contacts = state.contacts.map(contact =>
        contact.id === payload.id ? payload : contact
      );
    },
  },
});

export default contactsSlice.reducer;
