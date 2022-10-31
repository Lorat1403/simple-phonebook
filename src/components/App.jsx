import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { Section, Title } from './App.styled';

export function App() {
  return (
    <>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm />
        <ContactList />
        <Filter />
      </Section>
    </>
  );
}
