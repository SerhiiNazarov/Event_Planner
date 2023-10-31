import { Container } from './EventDetails.styled';

import { BackLink } from 'components/BackLink';
import { Details } from 'components/Details';

export const EventDetails = () => {
  return (
    <Container>
      <BackLink />
      <Details />
    </Container>
  );
};
