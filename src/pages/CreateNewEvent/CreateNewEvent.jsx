import React, { useState } from 'react';

import { Container } from './CreateNewEvent.styled';
import { useTranslation } from 'react-i18next';
import { BackLink } from 'components/BackLink';
import { Title } from 'components/PagesTitle';
import { FormContainer } from 'components/FormContainer';
import { EventForm } from 'components/EventForm';

export const CreateNewEvent = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <BackLink />
      <Title>{t('create')}</Title>
      <FormContainer>
        <EventForm action="createEvent" />
      </FormContainer>
    </Container>
  );
};
