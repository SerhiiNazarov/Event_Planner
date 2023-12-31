import styled from 'styled-components';
import Select from 'react-select';

import { ReactComponent as ChevronDown } from 'assets/chevron-down.svg';
import { ReactComponent as ChevronUp } from 'assets/chevron-up.svg';

export const SelectItem = styled(Select)`
  width: 240px;

  @media screen and (min-width: 768px) {
    width: 309px;
  }

  @media screen and (min-width: 1440px) {
    width: 372px;
  }

  svg {
    fill: transparent;
  }

  &:hover .сustom-select__single-value {
    color: #7b61ff;
  }

  &:hover,
  &:focus .сustom-select__placeholder {
    color: #7b61ff;
  }

  .сustom-select__single-value {
    height: 100%;
  }

  .сustom-select__control {
    height: 56px;
    border: 1px solid #aca7c3;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px #a68dae47;

    &:hover {
      border-color: #7b61ff;
    }
  }

  .сustom-select__clear-indicator,
  .сustom-select__indicator-separator {
    display: none;
    padding: 0;
  }

  .сustom-select__menu-notice,
  .сustom-select__placeholder,
  .сustom-select__input-container {
    margin: 0;
    padding: 0;
    color: #aca7c3;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .сustom-select__menu-list {
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .сustom-select__menu {
    padding: 16px;
  }
  .сustom-select__option {
    padding: 0;

    color: #3f3f3f;
    background: transparent;

    &:not(:last-child) {
      padding-bottom: 16px;
      margin-bottom: 16px;
      border-bottom: 1px solid #aca7c3;
    }

    &:hover,
    &:focus {
      color: #7b61ff;
      border-bottom: 1px solid #7b61ff;
      background-color: transparent;
    }
  }
  .сustom-select__option--is-selected {
    color: #7b61ff;
  }
`;

export const ArrowDown = styled(ChevronDown)``;

export const ArrowUp = styled(ChevronUp)``;
