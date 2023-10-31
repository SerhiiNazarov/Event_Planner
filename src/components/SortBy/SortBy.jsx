import { components } from 'react-select';
import { SelectSortBy, SortByIcon } from './SortBy.styled';

const options = [
  { value: 'Default', label: 'Default sort' },
  { value: 'By name ascending', label: 'By name' },
  { value: 'By name descending', label: 'By name' },
  { value: 'By data ascending', label: 'By data' },
  { value: 'By data descending', label: 'By data' },
  { value: 'By priority ascending', label: 'By priority' },
  { value: 'By priority descending', label: 'By priority' },
];

const selectSortByInd = props => {
  return (
    <components.DropdownIndicator {...props}>
      <SortByIcon />
    </components.DropdownIndicator>
  );
};

export const SortBy = () => {
  return (
    <SelectSortBy
      className="сustom-select-container"
      classNamePrefix="сustom-select"
      // value={getValueSortBy()}
      // onChange={handlerSelectedOption}
      options={options}
      isSearchable={false}
      placeholder="Sort by"
      components={{ DropdownIndicator: selectSortByInd }}
    />
  );
};
