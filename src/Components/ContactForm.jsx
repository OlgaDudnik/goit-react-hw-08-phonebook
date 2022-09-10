import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../redux/contactsOperations';
import contactsSelectors from '../redux/contactsSelectors';
import s from '../styles/styles.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const savedName = contacts && contacts.find(Cont => Cont.name === name);
    if (savedName !== undefined) {
      alert(`${name} is already in contacts!`);
      return;
    } else {
      dispatch(contactsOperations.addContact({ name, number }));
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.Input}
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
           Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={s.Label}>
        Number
        <input
          className={s.Input}
          type="tel"
          value={number}
          onChange={e => setNumber(e.target.value)}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
