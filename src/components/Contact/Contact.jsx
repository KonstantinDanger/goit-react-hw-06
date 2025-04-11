import css from "./Contact.module.css";

import { TiPhone } from "react-icons/ti";
import { TiGroup } from "react-icons/ti";

export default function Contact({ contact, onDelete }) {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <div className={css.contact}>
      <div>
        <div className={css.text}>
          <TiGroup className={css.icon} />
          {contact.name}
        </div>
        <div className={css.text}>
          <TiPhone className={css.icon} />
          {contact.number}
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
