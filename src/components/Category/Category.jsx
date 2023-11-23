import { useTranslation } from 'react-i18next';
import { CategoryWrapper, CategoryTxt } from './Category.styled';

export const Category = ({ cat }) => {
  const { t } = useTranslation();
  const getCatCollor = cat => {
    let color;
    switch (cat) {
      case `${t('high')}`:
        color = '#FF2B77';
        break;
      case `${t('medium')}`:
        color = '#E2A300';
        break;
      case `${t('low')}`:
        color = '#6BD475';
        break;
      default:
        color = '#7B61FF';
    }
    return color;
  };

  return (
    <CategoryWrapper>
      <CategoryTxt theme={getCatCollor(cat)}>{cat}</CategoryTxt>
    </CategoryWrapper>
  );
};
