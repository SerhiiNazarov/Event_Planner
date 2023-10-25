import { Container } from './Card.list.styled';
import { Card } from 'components/Card';
import { events } from '../../utils/events';

export const CardList = () => {
  return (
    <Container>
      {events.map(event => (
        <Card key={event.id} event={event} />
      ))}
    </Container>
  );
};
