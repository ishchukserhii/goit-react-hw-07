import { createSlice } from '@reduxjs/toolkit';


export const selectContacts = (state) => state.contacts.item;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

const slice = createSlice({
  name: 'contacts',
  initialState:{
    contacts: {
      items: [],
      loading: false,
      error: null
    },
    filters: {
      name: ""
    }
  },

  reducers: {
    addContact: (state, action) => {
      return { ...state, items: [...state.items, action.payload] };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;