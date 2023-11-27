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
  width: 16px;
  height: 16px;
  margin-right: 3px;
  stroke: #3f3f3f;

  @media screen and (min-width: 768px) {
    margin-left: 7px;
  }
`;

export const SortUpIcon = styled(SortByUpIcon)`
  width: 16px;
  height: 16px;
  margin-left: 7px;
  stroke: #3f3f3f;

  @media screen and (min-width: 768px) {
    margin-left: 7px;
  }
`;

export const SelectSortBy = styled(Select)`
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

    &:hover {
      box-shadow: 2px 4px 9px 0px #7b61ff;
    }
  }
  .сustom-select__control {
    width: 54px;
    border: none;
    outline: none;
    box-shadow: none;

    @media screen and (min-width: 768px) {
      width: auto;
      padding-right: 0;
    }

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
    display: none;
    color: #3f3f3f;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  .сustom-select__indicator-separator {
    display: none;
    padding: 0;
  }

  .сustom-select__indicator {
    margin-right: 14px;

    @media screen and (min-width: 768px) {
      margin-right: 12px;
    }
  }

  .сustom-select__input-container {
    color: transparent;
  }

  .сustom-select__single-value {
    display: none;
    color: #3f3f3f;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  .сustom-select__menu {
    width: 200px;

    padding: 16px 15px;
  }
  .сustom-select__menu-list {
    background: transparent;
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
`;
