import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://6826f82a397e48c913180070.mockapi.io'


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async(_, thunkAPI) => {
        try {
            const res = await axios.get('/contacts');
            return res.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async(newContact, thunkAPI) => {
        try {
            const res = await axios.post(`/contacts/${newContact}`);
            return res.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async(contactId, thunkAPI) => {
        try {
            const res = await axios.delete(`/contacts/${contactId}`);
            return res.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);
