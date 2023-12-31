import styled from 'styled-components';
import Calendar from 'react-calendar';
import { ReactComponent as ChevronDown } from 'assets/chevron-down.svg';
import { ReactComponent as ChevronUp } from 'assets/chevron-up.svg';

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
  width: 240px;
  height: 56px;
  border: 1px solid #aca7c3;
  padding: 16px 12px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  @media screen and (min-width: 768px) {
    width: 309px;
    height: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 372px;
    height: 56px;
  }

  &:hover {
    border-color: #7b61ff;
  }

  &:hover ${TextPicker} {
    color: #7b61ff;
  }
`;

export const PickerWrapper = styled.div`
  position: absolute;
  top: 88px;
  width: 240px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 14px 0px #00000012;
  overflow: hidden;
  background: #ffffff;
  z-index: 99;

  @media screen and (min-width: 768px) {
    width: 309px;
  }

  @media screen and (min-width: 1440px) {
    width: 372px;
  }
`;

export const ReactCalendar = styled(Calendar)`
  width: 240px;
  border-radius: 10px;
  border: none !important;

  @media screen and (min-width: 768px) {
    width: 309px;
  }

  @media screen and (min-width: 1440px) {
    width: 372px;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 14px;
  justify-content: flex-end;
`;

export const ArrowDown = styled(ChevronDown)``;

export const ArrowUp = styled(ChevronUp)``;
