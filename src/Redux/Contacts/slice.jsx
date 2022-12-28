import { fetchContacts, addContact, deleteContact } from './operation';
import { createSlice } from '@reduxjs/toolkit';

const sliceContact = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = null;
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = null;
    });
  },
});

export const contactsReducer = sliceContact.reducer;
