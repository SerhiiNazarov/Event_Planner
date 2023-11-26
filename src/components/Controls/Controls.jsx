import { useTranslation } from 'react-i18next';
import {
  Container,
  SortsWrapper,
  Link,
  TextAddBtn,
  IconPlus,
} from './Controls.styled';
import { SortByCategory } from 'components/SortByCategory';
import { SortBy } from 'components/SortBy';
import { ButtonType1 } from 'components/ButtonType1';

import { Title } from 'components/PagesTitle';

export const Controls = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title theme="none">{t('events')}</Title>
      <SortsWrapper>
        <SortByCategory />
        <SortBy />
        <Link to="/create">
          <ButtonType1 type="button">
            <span>
              <IconPlus />
            </span>
            <TextAddBtn>{t('btn_add')}</TextAddBtn>
          </ButtonType1>
        </Link>
      </SortsWrapper>
    </Container>
  );
};
