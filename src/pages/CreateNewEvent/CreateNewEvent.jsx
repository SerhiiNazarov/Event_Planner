import React, { useState } from 'react';

import { Container } from './CreateNewEvent.styled';
import { BackLink } from 'components/BackLink';
import { Title } from 'components/PagesTitle';
import { FormContainer } from 'components/FormContainer';
import { EventForm } from 'components/EventForm';

export const CreateNewEvent = () => {
  return (
    <Container>
      <BackLink />
      <Title>Create new event</Title>
      <FormContainer>
        <EventForm action="createEvent" />
      </FormContainer>
    </Container>
  );
};
