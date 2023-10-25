import styled from 'styled-components';
import TimePicker from './TimePicker.jsx';

export const StyledTimePicker = styled(TimePicker)`
  .rc-time-picker-panel-select {
    width: 186px;
    height: 160px;
    box-sizing: border-box;

    ul {
      color: #7b61ff;
      /* width: 186px; */
      height: 160px;
      padding: 12px 46px;
      box-sizing: border-box;
    }

    li {
      border-bottom: 2px solid #aca7c3;
      margin-bottom: 5px;
      box-sizing: border-box;

      &:hover {
        border-bottom: 2px solid #7b61ff;
      }
    }
  }

  .rc-time-picker-panel-inner {
  }

  .rc-time-picker-panel-combobox {
    display: flex;
  }

  .rc-time-picker-panel-input-wrap {
  }

  .rc-time-picker-input {
    /* height: 156px; */
    height: 56px;
    padding: 16px 22px;
    border: 1px solid #aca7c3;
    border-radius: 8px;
    transition: all 0.3s ease-out;

    &:hover {
      border-color: #7b61ff;
    }
  }

  .rc-time-picker-panel-select-option-selected {
    color: #7b61ff;
  }

  & .rc-time-picker-clear,
  & .rc-time-picker-clear-icon:after {
  }

  & .rc-time-picker-panel-select,
  & .rc-time-picker-input,
  & .rc-time-picker-panel-input {
    color: #aca7c3;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    outline: none;
    cursor: pointer;

    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`;
