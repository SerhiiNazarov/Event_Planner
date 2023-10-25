// import React, { useState } from 'react';
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

const options = [
  { value: 'en', label: 'EN' },
  { value: 'ua', label: 'UA' },
];

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
          defaultValue={options[0]}
          // onChange={setSelectedOption}
          options={options}
          className="сustom-select-container"
          classNamePrefix="сustom-select"
        />
      </Wrapper>
    </Container>
  );
};
