import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

const API_ENDPOINT = "contacts";

const getContacts = createAsyncThunk("contacts/getContactsStatus", () =>
  api.getData(API_ENDPOINT)
);

const addContact = createAsyncThunk("contacts/addContactStatus", (newCity) =>
  api.saveItem(API_ENDPOINT, newCity)
);

const deleteContact = createAsyncThunk("contacts/deleteContactStatus", (id) =>
  api.deleteItem(API_ENDPOINT, id)
);

export { getContacts, addContact, deleteContact };
