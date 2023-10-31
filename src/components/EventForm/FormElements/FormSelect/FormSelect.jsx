import { components } from 'react-select';
import { SelectItem, ArrowDown, ArrowUp } from './FormSelect.styled';

const selectCatInd = props => {
  return (
    <components.DropdownIndicator {...props}>
      {props.selectProps.menuIsOpen ? <ArrowUp /> : <ArrowDown />}
    </components.DropdownIndicator>
  );
};

export const FormSelect = ({
  field,
  props: { options, name, values, placeholder, setFieldValue, setFieldTouched },
}) => {
  return (
    <SelectItem
      {...field}
      name={name}
      className="сustom-select-container"
      classNamePrefix="сustom-select"
      options={options}
      isSearchable={false}
      components={{ DropdownIndicator: selectCatInd }}
      onChange={newValue => {
        setFieldValue(name, newValue.value);
        setFieldTouched(name);
      }}
      value={values}
      //   placeholder={placeholder}
    />
  );
};
