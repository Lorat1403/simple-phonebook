import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Loader from './Loader';
import { Section, Title } from './App.styled';
import { getIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';

export function App() {
  const isLoading = useSelector(getIsLoading);
  return (
    <>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm />
        {isLoading && <Loader />}
        <ContactList />
        <Filter />
      </Section>
    </>
  );
}
