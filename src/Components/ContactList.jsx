import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../redux/contactsOperations';
import contactsSelectors from '../redux/contactsSelectors';
import { Filter } from './Filter';
import s from '../styles/styles.module.css';

const ContactList = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const contactList = useSelector(contactsSelectors.getContacts);

  const filteredContacts = useMemo(() => {
    return (
      contactList?.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [filter, contactList]);

  const contacts = filter.length ? filteredContacts : contactList;

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Filter value={filter} onFilter={setFilter} />
      <ul className={s.List}>
        {contacts?.length ? (
          contacts?.map(({ id, name, number }) => (
            <li key={id} className={s.ListItem}>
              {name}: {number}
              <button
                className={s.BtnDelate}
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <span>Phonebook empty!</span>
        )}
      </ul>
    </>
  );
};
export default ContactList;
