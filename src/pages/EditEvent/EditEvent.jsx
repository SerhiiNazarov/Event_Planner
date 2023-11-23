import { useTranslation } from 'react-i18next';
import { BackLink } from 'components/BackLink';
import { FormContainer } from 'components/FormContainer';
import { EventForm } from 'components/EventForm';
import { Title } from 'components/PagesTitle';
import { Container } from './EditEvent.styled';

export const EditEvent = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <BackLink />
      <Title> {t('ed_event')}</Title>
      <FormContainer>
        <EventForm action="editEvent" />
      </FormContainer>
    </Container>
  );
};
