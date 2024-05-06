import { Contact } from '../Contact/Contact.jsx';



 export const ContactList = ({ contacts, searchQuery, onDelete }) => {
 
  const filteredContacts = contacts.filter(
    contact => contact.name && 
               contact.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

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
