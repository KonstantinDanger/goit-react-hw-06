import "./App.css";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

// import { useEffect, useState } from "react";

// const storageKey = "contacts-key";

function App() {
  // const loadContacts = () => {
  //   const jsonData = localStorage.getItem(storageKey);
  //   const data = JSON.parse(jsonData);
  //   if (!data) {
  //     return initialContacts;
  //   }

  //   return data;
  // };

  // const saveContacts = () => {
  //   const strData = JSON.stringify(contacts);
  //   localStorage.setItem(storageKey, strData);
  // };

  // useEffect(saveContacts, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
