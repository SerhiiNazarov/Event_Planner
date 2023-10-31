import { CategoryWrapper, CategoryTxt } from './Category.styled';

export const Category = ({ cat }) => {
  const getCatCollor = cat => {
    let color;
    switch (cat) {
      case 'High':
        color = '#FF2B77';
        break;
      case 'Medium':
        color = '#E2A300';
        break;
      case 'Low':
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
