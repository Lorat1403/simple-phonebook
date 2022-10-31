import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../redux/selectors';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { addContact } from 'redux/operations';

const nameInputId = nanoid(5);
const numberInputId = nanoid(8);

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };
  const filteredContacts = () => {
    const findName = items.find(item => item.name === name);
    const findNumber = items.find(item => item.number === number);

    if (findName) {
      alert(`${name} is already in contacts`);
    } else if (findNumber) {
      alert(`${number} is already in contacts`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    filteredContacts();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          value={name}
          id={nameInputId}
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          value={number}
          id={numberInputId}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
