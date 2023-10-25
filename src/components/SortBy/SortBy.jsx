import { components } from 'react-select';
import { SelectSortBy, SortByIcon } from './SortBy.styled';

const options = [
  { value: 'default', label: 'Default sort' },
  { value: 'by name ascending', label: 'by name' },
  { value: 'by name descending', label: 'by name' },
  { value: 'by data ascending', label: 'by data' },
  { value: 'by data descending', label: 'by data' },
  { value: 'by priority ascending', label: 'by priority' },
  { value: 'by priority descending', label: 'by priority' },
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
      // components={{
      //   DropdownIndicator:
      //     selectIcon === true
      //       ? OptionIconAscending
      //       : selectIcon === false
      //       ? OptionIconDescending
      //       : CustomIconSelectSortBy,
      //   Option: OptionIcon,
      // }}
      components={{ DropdownIndicator: selectSortByInd }}
    />
  );
};
