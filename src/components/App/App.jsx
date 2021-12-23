import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as contactsActions from "../../redux/contacts/contactsSlice";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

import s from "./App.module.scss";
import {
  getContacts,
  addContact,
  deleteContact,
} from "../../redux/contacts/contactsOperation";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const onSubmitName = ({ name, number }) => {
    const newName = {
      name,
      number,
    };

    const compareContact = contacts.some(
      (contact) => contact.name?.toLowerCase() === newName.name.toLowerCase()
    );
    if (compareContact) {
      return alert(`${name} is alredy in contacts`);
    }

    dispatch(addContact(newName));
  };

  const filteredContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name?.toLowerCase().includes(normalizeFilter)
    );
  };

  const filterResult = filteredContact();

  const onFilterValueChange = (e) =>
    dispatch(contactsActions.chengeFilter(e.target.value));

  const deleteContactByID = (id) => dispatch(deleteContact(id));

  return (
    <main>
      <section>
        <div className={s.container}>
          <h1 className={s.title}>Phonebook</h1>

          <ContactForm onSubmit={onSubmitName} />

          <h2 className={s.title}>Contacts</h2>

          <Filter onChangeValue={onFilterValueChange} filter={filter} />

          <ContactList
            filterContactsList={filterResult}
            onClickDel={deleteContactByID}
          />
        </div>
      </section>
    </main>
  );
};

export default App;
