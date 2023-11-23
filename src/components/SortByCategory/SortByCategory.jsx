import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { changeCategory } from 'redux/events/eventsSlice';

import { components } from 'react-select';
import { SelectCat, CatIcon, Container } from './SortByCategory.styled';

const selectCatInd = props => {
  return (
    <components.DropdownIndicator {...props}>
      <CatIcon />
    </components.DropdownIndicator>
  );
};

export const SortByCategory = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const options = [
    { value: 'All', label: `${t('all')}` },
    { value: 'Art', label: `${t('art')}` },
    { value: 'Music', label: `${t('music')}` },
    { value: 'Business', label: `${t('business')}` },
    { value: 'Conference', label: `${t('conference')}` },
    { value: 'Workshop', label: `${t('workshop')}` },
    { value: 'Party', label: `${t('party')}` },
    { value: 'Sport', label: `${t('sport')}` },
  ];

  return (
    <Container>
      <SelectCat
        placeholder={t('category')}
        className="сustom-select-container"
        classNamePrefix="сustom-select"
        components={{ DropdownIndicator: selectCatInd }}
        options={options}
        isSearchable={false}
        onChange={newValue => {
          dispatch(changeCategory(newValue.value));
        }}
      />
    </Container>
  );
};
