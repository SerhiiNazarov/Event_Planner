import { useTranslation } from 'react-i18next';
import { Link, Arrow } from './BackLink.styled';

export const BackLink = () => {
  const { t } = useTranslation();
  return (
    <Link to="/">
      <span>
        <Arrow />
      </span>
      {t('back')}
    </Link>
  );
};
