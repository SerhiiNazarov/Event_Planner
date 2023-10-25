import { Outlet } from 'react-router-dom';
import { Container } from './SharedLoyaut.styled';
import { Header } from 'components/Header';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
