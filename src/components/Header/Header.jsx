import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { changeSearchTerm } from 'redux/events/eventsSlice';

import { lngsOpt } from 'utils/options';

import {
  Container,
  MainName,
  SearchInput,
  SelectLng,
  Form,
  SearchIcon,
  Button,
  Link,
} from './Header.styled';

export const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSearch = event => {
    const searchTerm = event.target.value;

    dispatch(changeSearchTerm(searchTerm));
  };

  const handleChangeLanguage = ({ value }) => {
    i18n.changeLanguage(value);
  };

  return (
    <Container>
      <Link to="/">
        <MainName>{t('planner')}</MainName>
      </Link>

      <SelectLng
        defaultValue={lngsOpt[0]}
        onChange={handleChangeLanguage}
        options={lngsOpt}
        className="сustom-select-container"
        classNamePrefix="сustom-select"
        isSearchable={false}
      />
      <Form>
        <Button type="submit">
          <SearchIcon />
        </Button>
        <SearchInput
          type="text"
          placeholder={t('search')}
          onChange={handleSearch}
        />
      </Form>
    </Container>
  );
};
