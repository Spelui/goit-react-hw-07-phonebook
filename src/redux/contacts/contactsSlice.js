import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "./contactsOperation";

const initialState = {
  items: [],
  filter: "",
};

const conatactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    chengeFilter: (state, action) => ({ ...state, filter: action.payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, action) => ({
        ...state,
        items: [action.payload, ...state.items],
      }))
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const idx = state.items.findIndex(
          (contact) => contact.id === payload.id
        );
        state.items.splice(idx, 1);
      });
  },
});

export const { chengeFilter } = conatactsSlice.actions;

export default conatactsSlice.reducer;
