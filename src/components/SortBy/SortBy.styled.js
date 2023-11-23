import styled from 'styled-components';
import Select from 'react-select';
import { ReactComponent as SortBy } from 'assets/sortBy.svg';
import { ReactComponent as SortByDownIcon } from 'assets/arrow-down.svg';
import { ReactComponent as SortByUpIcon } from 'assets/arrow-up.svg';

export const SortByIcon = styled(SortBy)`
  width: 24px;
  height: 24px;
  stroke: #3f3f3f;
`;

export const SortDownIcon = styled(SortByDownIcon)`
  width: 14px;
  height: 14px;
  margin-left: 7px;
  stroke: #aca7c3;
`;

export const SortUpIcon = styled(SortByUpIcon)`
  width: 14px;
  height: 14px;
  margin-left: 7px;
  stroke: #aca7c3;
`;

export const SelectSortBy = styled(Select)`
  z-index: 10;
  padding-right: 10px;
  /* width: 250px; */
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
  }
  .сustom-select__control {
    border: none;
    outline: none;
    box-shadow: none;

    &:hover ${SortUpIcon} {
      stroke: #7b61ff;
    }

    &:hover ${SortDownIcon} {
      stroke: #7b61ff;
    }

    &:hover ${SortByIcon} {
      stroke: #7b61ff;
    }
  }

  .сustom-select__placeholder {
    color: #3f3f3f;
  }

  .сustom-select__indicator-separator {
    display: none;
    padding: 0;
  }

  /* .сustom-select__value-container {
    color: red;
    padding: 0;
  } */
  /* .сustom-select__menu-notice,
  .сustom-select__placeholder,
  .сustom-select__input-container {
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: red;
  } */
  /* .сustom-select__placeholder {
  } */

  .сustom-select__input-container {
    color: transparent;
  }

  .сustom-select__single-value {
    color: #3f3f3f;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  /* .сustom-select__input {
  } */

  .сustom-select__menu {
    width: 200px;

    padding: 16px 15px;
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
    display: flex;
    align-items: center;
    padding-left: 30px;

    padding: 0;
    padding-bottom: 16px;
    color: #aca7c3;
    background: transparent;
    border-bottom: 1px solid #aca7c3;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    &:hover {
      color: #7b61ff;
      border-bottom: 1px solid #7b61ff;
    }

    &:hover ${SortUpIcon} {
      stroke: #7b61ff;
    }

    &:hover ${SortDownIcon} {
      stroke: #7b61ff;
    }
  }

  .сustom-select__dropdown-indicator {
    padding: 0;
  }
  .сustom-select__option--is-selected {
    color: #7b61ff;

    ${SortUpIcon} {
      stroke: #7b61ff;
    }

    ${SortDownIcon} {
      stroke: #7b61ff;
    }
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
