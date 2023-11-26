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
  meta,
  props: { options, name, values, placeholder, setFieldValue, setFieldTouched },
}) => {
  const initDefaultValue = () => {
    const defaultValue = { value: meta.value, label: meta.value };
    return defaultValue;
  };

  return (
    <SelectItem
      {...field}
      name={name}
      className="сustom-select-container"
      classNamePrefix="сustom-select"
      defaultValue={initDefaultValue}
      options={options}
      isSearchable={false}
      components={{ DropdownIndicator: selectCatInd }}
      onChange={newValue => {
        setFieldValue(name, newValue.value);
        setFieldTouched(name);
      }}
      value={values}
    />
  );
};
