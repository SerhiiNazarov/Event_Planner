import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { components } from 'react-select';

import { useDispatch } from 'react-redux';
import { changeSortBy } from 'redux/events/eventsSlice';

import {
  SelectSortBy,
  SortByIcon,
  SortDownIcon,
  SortUpIcon,
} from './SortBy.styled';

export const SortBy = () => {
  const [sortIcon, setSortIcon] = useState(null);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const sortByOptions = [
    { value: 'Default', label: `${t('default')}` },
    { value: 'By name ascending', label: `${t('by_name')}` },
    { value: 'By name descending', label: `${t('by_name')}` },
    { value: 'By data ascending', label: `${t('by_date')}` },
    { value: 'By data descending', label: `${t('by_date')}` },
    { value: 'By priority ascending', label: `${t('by_priority')}` },
    { value: 'By priority descending', label: `${t('by_priority')}` },
  ];

  const selectSortByInd = props => {
    return (
      <components.DropdownIndicator {...props}>
        {sortIcon === 'ascending' ? (
          <SortUpIcon />
        ) : sortIcon === 'descending' ? (
          <SortDownIcon />
        ) : (
          <SortByIcon />
        )}
      </components.DropdownIndicator>
    );
  };

  const iconOption = props => {
    return (
      <components.Option {...props}>
        {props.data.label}

        {props.data.value.includes('ascending') ? (
          <SortUpIcon />
        ) : props.data.value.includes('descending') ? (
          <SortDownIcon />
        ) : (
          <></>
        )}
      </components.Option>
    );
  };

  const handelSelectOption = ({ value }) => {
    if (value.includes('ascending')) {
      setSortIcon('ascending');
    } else if (value.includes('descending')) {
      setSortIcon('descending');
    } else {
      setSortIcon(null);
    }

    dispatch(changeSortBy(value));
  };

  return (
    <SelectSortBy
      className="сustom-select-container"
      classNamePrefix="сustom-select"
      // value={getValueSortBy()}
      onChange={handelSelectOption}
      options={sortByOptions}
      isSearchable={false}
      placeholder={t('sort')}
      hidden="none"
      components={{
        DropdownIndicator: selectSortByInd,
        Option: iconOption,
      }}
    />
  );
};
