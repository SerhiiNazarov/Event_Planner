import { Container, SortsWrapper, Link } from './Controls.styled';
import { SortByCategory } from 'components/SortByCategory';
import { SortBy } from 'components/SortBy';
import { ButtonType1 } from 'components/ButtonType1';
import { ReactComponent as Plus } from 'assets//plus.svg';

import { Title } from 'components/PagesTitle';

export const Controls = () => {
  return (
    <Container>
      <Title>My events</Title>
      <SortsWrapper>
        <SortByCategory />
        <SortBy />
        <Link to="/create">
          <ButtonType1>
            <span>
              <Plus style={{ marginRight: '16px' }} />
            </span>
            Add new event
          </ButtonType1>
        </Link>
      </SortsWrapper>
    </Container>
  );
};
