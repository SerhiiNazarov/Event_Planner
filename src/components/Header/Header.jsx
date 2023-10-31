// import React, { useState } from 'react';

import { lngsOpt } from 'utils/options';

import {
  Container,
  MainName,
  SearchInput,
  Wrapper,
  SelectLng,
  Form,
  SearchIcon,
  Button,
} from './Header.styled';

export const Header = () => {
  // const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Container>
      <MainName>Event Planner</MainName>
      <Wrapper>
        <Form>
          <Button type="submit">
            <SearchIcon />
          </Button>
          <SearchInput
            // value={query}
            type="text"
            placeholder="Search by keywords"
          />
        </Form>

        <SelectLng
          defaultValue={lngsOpt[0]}
          // onChange={setSelectedOption}
          options={lngsOpt}
          className="сustom-select-container"
          classNamePrefix="сustom-select"
          isSearchable={false}
        />
      </Wrapper>
    </Container>
  );
};
