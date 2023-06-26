import styles from './contact-list.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-slice';
import {getFilteredContacts} from 'redux/contacts/contacts-selectors';


const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);
  const onDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  return (
    <>
    {!filteredContacts?.length && (<h2>
          Add some contacts <br /> Your phonebook is empty
        </h2>)}
    <ul className={styles.list}>
    {filteredContacts.map(contact => (
    <li key={contact.id} id={contact.id} className={styles.item}>
      <span className={styles.span}>{contact.name}:</span>
      <span>{contact.number}</span>
      <button className={styles.btn} onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  ))
    }
    </ul>
    </>
  );
};

export default ContactList;
