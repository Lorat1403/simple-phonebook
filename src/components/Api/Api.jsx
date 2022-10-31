import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://635f9a94ca0fe3c21a9fffd0.mockapi.io/api/contacts',
});

export const getContacts = async () => {
  const { data } = await instanceContacts.get('/');
  return data;
};

export const addContacts = async (name, number) => {
  const newContact = { name, number: number };
  const { data } = await instanceContacts.post('/', newContact);
  return data;
};

export const removeContacts = async id => {
  const { data } = await instanceContacts.delete(`/${id}`);
  return data;
};
