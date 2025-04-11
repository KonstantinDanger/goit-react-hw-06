import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const fitsToFilter = (contact) => {
    return (
      filter.trim() === "" ||
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={css.contactList}>
      {contacts.map((contact) => {
        return (
          fitsToFilter(contact) && (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={handleDeleteContact}
            />
          )
        );
      })}
    </div>
  );
}
