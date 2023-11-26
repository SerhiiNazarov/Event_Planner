import styled from 'styled-components';
import Select from 'react-select';
import { ReactComponent as СategoryIcon } from 'assets/category.svg';

export const Container = styled.div`
  display: flex;
`;

export const CatIcon = styled(СategoryIcon)`
  width: 20px;
  height: 20px;
  stroke: #3f3f3f;
`;

export const SelectCat = styled(Select)`
  z-index: 10;
  height: 56px;

  transition: all 0.3s ease-out;

  &:hover .сustom-select__single-value {
    color: #7b61ff;
  }

  &:hover .сustom-select__placeholder {
    color: #7b61ff;
  }

  &.сustom-select-container {
    background: #ffffff;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px #a68dae47;

    &:hover ${CatIcon} {
      stroke: #7b61ff;
    }
  }
  .сustom-select__control {
    width: 56px;
    text-align: center;
    padding-right: 16px;

    border: none;
    outline: none;
    box-shadow: none;

    @media screen and (min-width: 768px) {
      width: 150px;
    }
  }

  .сustom-select__indicator-separator {
    display: none;
    padding: 0;
  }

  .сustom-select__placeholder {
    display: none;
    color: #3f3f3f;
    text-align: center;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  .сustom-select__menu {
    left: 12px;
    width: 200px;
    padding: 16px;

    @media screen and (min-width: 768px) {
      left: -20px;
    }
  }
  .сustom-select__value-container {
    margin: 0;
    padding: 0;
  }
  .сustom-select__menu-notice,
  .сustom-select__placeholder,
  .сustom-select__input-container {
  }
  /* .сustom-select__placeholder {
    border: 1px solid red;
    color: red;
  } */

  .сustom-select__input-container {
    color: transparent;
    display: flex;
    justify-content: center;
  }

  .сustom-select__single-value {
    display: none;
    margin: 0;
    color: #3f3f3f;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
  .сustom-select__input {
    /* display: none; */
    display: flex;
    justify-content: center;
  }
  .сustom-select__menu {
    padding: 16px 12px;
  }
  .сustom-select__menu-list {
    background: transparent;

    /* ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: red;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: red;
      border-radius: 5px;
    } */
  }

  .сustom-select__option {
    padding: 0;
    background: transparent;
    border-bottom: 1px solid #aca7c3;
    color: #aca7c3;

    &:not(:last-child) {
      padding-bottom: 16px;
      margin-bottom: 16px;
      border-bottom: 1px solid #aca7c3;
    }

    &:hover,
    &:focus {
      color: #7b61ff;
      border-bottom: 1px solid #7b61ff;
    }

    /* &:first-child {
      margin-bottom: 8px;
    } */

    /* &:hover,
    &:focus {
      background-color: transparent;
    } */
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
