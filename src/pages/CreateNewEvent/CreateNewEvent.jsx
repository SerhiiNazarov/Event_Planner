import React, { useState } from 'react';

import { Container } from './CreateNewEvent.styled';
import { BackLink } from 'components/BackLink';
import { Title } from 'components/PagesTitle';
import { FormContainer } from 'components/FormContainer';
import { CreateEventForm } from 'components/CreateEventForm';

export const CreateNewEvent = () => {
  return (
    <Container>
      <BackLink />
      <Title>Create new event</Title>
      <FormContainer>
        <CreateEventForm />
      </FormContainer>
    </Container>
  );
};
