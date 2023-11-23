import { useTranslation } from 'react-i18next';
import { Container, SortsWrapper, Link } from './Controls.styled';
import { SortByCategory } from 'components/SortByCategory';
import { SortBy } from 'components/SortBy';
import { ButtonType1 } from 'components/ButtonType1';
import { ReactComponent as Plus } from 'assets//plus.svg';

import { Title } from 'components/PagesTitle';

export const Controls = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t('events')}</Title>
      <SortsWrapper>
        <SortByCategory />
        <SortBy />
        <Link to="/create">
          <ButtonType1 type="button">
            <span>
              <Plus style={{ marginRight: '16px' }} />
            </span>
            {t('btn_add')}
          </ButtonType1>
        </Link>
      </SortsWrapper>
    </Container>
  );
};
