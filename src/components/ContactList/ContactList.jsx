import { Contact } from '../Contact/Contact.jsx';



 export const ContactList = ({ contacts, searchQuery, onDelete }) => {
 
 const filteredContacts = searchQuery 
  ? contacts.filter(
      contact => 
        contact.name && 
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : contacts;

  return (
    <div>
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
