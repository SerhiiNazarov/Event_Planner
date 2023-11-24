import { useTranslation } from 'react-i18next';
import { Link } from './BackLink.styled';
import { ReactComponent as ArrowLeft } from 'assets/arrow-left.svg';

export const BackLink = () => {
  const { t } = useTranslation();
  return (
    <Link to="/">
      <span>
        <ArrowLeft />
      </span>
      {t('back')}
    </Link>
  );
};
