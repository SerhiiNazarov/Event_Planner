import { components } from 'react-select';
import { SelectCat, CatIcon, Container } from './SortByCategory.styled';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Art', label: 'Art' },
  { value: 'Music', label: 'Music' },
  { value: 'Business', label: 'Business' },
  { value: 'Conference', label: 'Conference' },
  { value: 'Workshop', label: 'Workshop' },
  { value: 'Party', label: 'Party' },
  { value: 'Sport', label: 'Sport' },
];

const selectCatInd = props => {
  return (
    <components.DropdownIndicator {...props}>
      <CatIcon />
    </components.DropdownIndicator>
  );
};

export const SortByCategory = () => {
  return (
    <Container>
      <SelectCat
        placeholder="Category"
        className="сustom-select-container"
        classNamePrefix="сustom-select"
        components={{ DropdownIndicator: selectCatInd }}
        options={options}
        isSearchable={false}
      />
    </Container>
  );
};
