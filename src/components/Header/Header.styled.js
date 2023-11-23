import styled from 'styled-components';
import Select from 'react-select';
import { RiSearchLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 92px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #7b61ff;
  background: #fefcff;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const MainName = styled.h1`
  font-family: 'Alata';
  font-size: 24px;
  color: #7b61ff;
`;

export const SearchInput = styled.input`
  width: 100%;
  font-family: poppins;
  font-weight: 300;
  font-size: 18px;
  line-height: 16px;

  border: none;
  outline: none;
  color: #1c1b1f;
`;

export const SelectLng = styled(Select)`
  height: 48px;
  z-index: 10;
  padding-left: 12px;
  padding-right: 6px;

  &:hover svg {
    fill: #7b61ff;
  }

  &:hover .сustom-select__single-value {
    color: #7b61ff;
  }

  &:hover .сustom-select__placeholder {
    color: #7b61ff;
  }

  svg {
    fill: #3f3f3f;
  }

  &.сustom-select-container {
    display: flex;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px #a68dae47;
  }
  .сustom-select__control {
    border: none;
    outline: none;
    box-shadow: none;
  }

  .сustom-select__indicator-separator {
    display: none;
    padding: 0;
  }

  .сustom-select__placeholder {
    color: #3f3f3f;
  }
  /* .сustom-select__value-container {
    color: red;
    padding: 0;
  } */
  .сustom-select__menu-notice,
  .сustom-select__placeholder,
  .сustom-select__input-container {
  }
  .сustom-select__placeholder {
  }

  .сustom-select__input-container {
    display: none;
  }

  .сustom-select__single-value {
    color: #3f3f3f;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    margin-right: 4px;
    margin-left: 0;
  }
  .сustom-select__input {
  }
  .сustom-select__menu {
    padding: 16px 12px;
  }
  .сustom-select__menu-list {
    background: transparent;

    /* ::-webkit-scrollbar {
      width: 4px;
    } */
    /* ::-webkit-scrollbar-thumb {
      background-color: red;
      border-radius: 5px;
    } */
    /* ::-webkit-scrollbar-track {
      background-color: red;
      border-radius: 5px;
    } */
  }
  .сustom-select__option {
    padding: 0;
    padding-bottom: 4px;

    color: #aca7c3;
    background: transparent;
    border-bottom: 1px solid #aca7c3;

    &:first-child {
      margin-bottom: 8px;
    }

    &:hover,
    &:focus {
      color: #7b61ff;
      background-color: transparent;
      border-bottom: 1px solid #7b61ff;
    }
  }

  .сustom-select__dropdown-indicator {
    padding: 0;
  }
  .сustom-select__option--is-selected {
    color: #7b61ff;
  }

  /* @media {
    .сustom-select__single-value {
      font-size: ;
    }
    .сustom-select__option {
      font-size: ;
    }
    .сustom-select__placeholder {
      font-size: ;
    }
  } */

  /* @media  {
    .сustom-select__dropdown-indicator {
      display: block;
      padding: 13px 18px 8px 8px;
    }
  } */
`;

export const Form = styled.form`
  width: 410px;
  height: 48px;
  margin-right: 35px;
  display: flex;
  border-radius: 10px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
`;

export const SearchIcon = styled(RiSearchLine)`
  width: 17px;
  height: 17px;
  color: #7b61ff;
`;

export const Button = styled.button`
  display: inline-block;
  border: 0;
  background: transparent;

  cursor: pointer;
  outline: none;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
