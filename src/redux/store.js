import { configureStore } from "@reduxjs/toolkit";

import conatactsReducer from "./contacts/contactsSlice";

const store = configureStore({
  reducer: {
    contacts: conatactsReducer,
  },
});

export { store };
