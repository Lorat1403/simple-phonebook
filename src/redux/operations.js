import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../components/Api/Api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const result = await api.addContacts(name, number);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const items = await api.removeContacts(id);
      return items;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
