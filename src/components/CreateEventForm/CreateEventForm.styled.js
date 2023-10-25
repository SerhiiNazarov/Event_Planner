import styled from 'styled-components';
import { Field } from 'formik';
import Select from 'react-select';
import { ReactComponent as ChevronDown } from 'assets/chevron-down.svg';
import { ReactComponent as ChevronUp } from 'assets/chevron-up.svg';
import Calendar from 'react-calendar';

export const Input = styled.input`
  padding: 16px 12px 16px 12px;
  border: 1px solid #aca7c3;
  outline: transparent;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;

  &::placeholder {
    color: #aca7c3;
    opacity: 1;
  }

  &:hover {
    border-color: #7b61ff;
  }
`;

export const Textarea = styled(Field)`
  height: 156px;
  padding: 16px 12px 16px 12px;
  border: 1px solid #aca7c3;
  outline: transparent;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;

  resize: none;

  &::placeholder {
    color: #aca7c3;
    opacity: 1;
  }

  &:hover {
    border-color: #7b61ff;
  }
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 282px;
  display: flex;
  flex-direction: column;
  gap: 20px 42px;
  flex-wrap: wrap;
`;

export const SelectItem = styled(Select)`
  width: 372px;
  /* padding: 16px 12px 16px 12px; */
  /* outline: transparent;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px; */

  svg {
    fill: #7b61ff;
  }
  /* &.сustom-select-container {
    background: red;
  } */
  .сustom-select__control {
    height: 56px;
    border: 1px solid #aca7c3;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px #a68dae47;

    &:hover {
      border-color: #7b61ff;
    }
  }
  /* .сustom-select__control--menu-is-open {
    color: red;
  } */
  /* .сustom-select__control--is-focused {
    color: red;
  } */
  /* .сustom-select__indicator {
    background: red;
  } */
  .сustom-select__clear-indicator,
  .сustom-select__indicator-separator {
    display: none;
    padding: 0;
  }
  /* .сustom-select__value-container {
    color: red;
  } */
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
  /* .сustom-select__single-value {
    font-size: ;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ;
  } */
  /* .сustom-select__menu {
    background-color: red;
  } */
  .сustom-select__menu-list {
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    /* ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: ;
      border-radius: 5px;
    } */
  }

  .сustom-select__menu {
    padding: 16px;
  }
  .сustom-select__option {
    padding: 0;
    /* padding: 8px 12px 8px 50px;
    pad
    font-size: ;
    line-height: 1.5; */
    color: #3f3f3f;
    background: transparent;
    /* opacity: 0.5; */
    &:not(:last-child) {
      padding-bottom: 16px;
      margin-bottom: 16px;
      border-bottom: 1px solid #aca7c3;
    }

    &:hover,
    &:focus {
      background-color: transparent;
    }

    /* &:hover,
    &:focus {
      background-color: ;
      color: ;
      opacity: 1;
    } */
  }
  .сustom-select__option--is-selected {
    color: #7b61ff;
  }

  /* background-color: red; */
  /* color: ;
    opacity: 1;

  /* @media  {
    .сustom-select__single-value {
      font-size: ;
    }
    .сustom-select__option {
      font-size: ;
    }
  } */
`;

export const TextPicker = styled.p`
  color: ${p => p.color};
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
`;

export const PickerD = styled.div`
  display: flex;
  justify-content: space-between;
  width: 372px;
  height: 56px;
  border: 1px solid #aca7c3;
  padding: 16px 12px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  &:hover {
    border-color: #7b61ff;
  }
`;

export const ArrowDown = styled(ChevronDown)``;

export const ArrowUp = styled(ChevronUp)``;

export const PickerWrapper = styled.div`
  position: absolute;
  top: 88px;
  width: 372px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 14px 0px #00000012;
  overflow: hidden;
  background: #ffffff;
  z-index: 99;
`;

export const ReactCalendar = styled(Calendar)`
  width: 372px;
  border-radius: 10px;
  border: none !important;
`;

export const CancelBtn = styled.button`
  cursor: pointer;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  width: 75px;
  padding: 8px 10px;
  border: 1px solid #7b61ff;
  border-radius: 4px;
  color: #7b61ff;
  background-color: #ffffff;
  transition: all 0.3s ease-out;

  &:hover {
    border: none;
    color: #ffffff;
    background-color: #7b61ff;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;
