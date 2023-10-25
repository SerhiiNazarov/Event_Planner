import { Controls } from 'components/Controls';
import { Container } from './MyEvents.styled';
import { CardList } from 'components/CardList';

export const MyEvents = () => {
  return (
    <Container>
      <Controls />
      <CardList />
    </Container>
  );
};
