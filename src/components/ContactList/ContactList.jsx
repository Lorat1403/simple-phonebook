import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operations';
import { getFilter, getItems } from '../../redux/selectors';
import { List, Item, Contact, Button } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactFilter = () => {
    const normalizeFilter = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filteredContacts = contactFilter();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Contact>
            {name}: {number}
          </Contact>
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
