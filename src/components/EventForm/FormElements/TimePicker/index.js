import styled from 'styled-components';
import { DeliTimePicker } from './TimePicker.jsx';
import { ReactComponent as ChevronDown } from 'assets/chevron-down.svg';
import { ReactComponent as ChevronUp } from 'assets/chevron-up.svg';

export const StyledTimePicker = styled(DeliTimePicker)`
  .rc-time-picker-panel-input-wrap {
  }

  .rc-time-picker-clear {
    display: none;
  }

  .rc-time-picker-panel-select {
    width: 186px;
    height: 250px;
    border: none;

    box-sizing: border-box;

    &::-webkit-scrollbar {
      @media screen and (min-width: 320px) {
        display: none;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 8px;
      transform: translateY(56px);
      color: #3f3f3f;
      padding: 1px 46px;
      box-sizing: border-box;
      border: none;
      outline: none;
    }

    li {
      /* border-bottom: 2px solid #aca7c3; */
      margin-bottom: 5px;
      box-sizing: border-box;

      &:hover {
        /* border-bottom: 2px solid #7b61ff; */
      }
    }
  }

  .rc-time-picker-panel {
  }

  .rc-time-picker-panel-inner {
    border: none;
    box-shadow: none;

    &::before {
      position: absolute;
      top: 30px;
      left: 170px;
      content: ':';
      font-family: 'Poppins-SemiBold' !important;
      font-size: 44px;
      color: #aca7c3;
      /* @include font(16px, 24px);
      color: getColor('text-main'); */
    }
  }

  .rc-time-picker-panel-combobox {
    display: flex;
    height: 150px;

    outline: none;
    box-shadow: 2px 4px 9px 0px #a68dae47;
    border-radius: 15px;
  }

  .rc-time-picker-panel-input-wrap {
    display: none;
  }

  .rc-time-picker-input {
    /* height: 156px; */
    /* height: 256px; */
    /* padding: 16px 22px;
    border: 1px solid #aca7c3;
    border-radius: 8px;
    transition: all 0.3s ease-out;

    &:hover {
      border-color: #7b61ff;
    } */
    display: none;
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

  &:hover ${TextPicker} {
    color: #7b61ff;
  }
`;

export const ArrowDown = styled(ChevronDown)``;

export const ArrowUp = styled(ChevronUp)``;

export const PickerWrapper = styled.div`
  position: absolute;
  top: 90px;

  width: 374px;
  overflow: hidden;
  height: 250px;
  background-color: #ffffff;

  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  z-index: 9;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  margin-top: 16px;
  display: flex;
  gap: 14px;
  justify-content: flex-end;
`;
