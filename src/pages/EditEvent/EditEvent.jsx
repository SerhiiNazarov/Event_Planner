import { BackLink } from 'components/BackLink';
import { FormContainer } from 'components/FormContainer';
import { EventForm } from 'components/EventForm';
import { Title } from 'components/PagesTitle';
import { Container } from './EditEvent.styled';

export const EditEvent = () => {
  return (
    <Container>
      <BackLink />
      <Title>Edit event</Title>
      <FormContainer>
        <EventForm />
      </FormContainer>
    </Container>
  );
};
