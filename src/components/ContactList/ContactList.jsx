import { Contact } from '../Contact/Contact.jsx';

import css from "./ContactList.module.css";

 export const ContactList = ({ contacts, searchQuery, onDelete }) => {
 
 const filteredContacts = searchQuery 
  ? contacts.filter(
      contact => 
        contact.name && 
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : contacts;

  return (
    <div className={css.container}>
      {filteredContacts.map(contact => (
        <Contact 
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
