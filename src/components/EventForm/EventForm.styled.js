import styled from 'styled-components';
import { Form } from 'formik';
import { ReactComponent as ChevronDown } from 'assets/chevron-down.svg';
import { ReactComponent as ChevronUp } from 'assets/chevron-up.svg';
import Calendar from 'react-calendar';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;

  @media screen and (min-width: 768px) {
    height: 495px;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    height: 287px;
    gap: 20px 42px;
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
  width: 240px;
  height: 56px;
  border: 1px solid #aca7c3;
  padding: 16px 12px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  @media screen and (min-width: 768px) {
    width: 308px;
    height: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 372px;
    height: 56px;
  }

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

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ReactCalendar = styled(Calendar)`
  width: 372px;
  border-radius: 10px;
  border: none !important;
`;

export const BtnWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 14px;
  justify-content: flex-end;
`;

export const SubmitBtnWrp = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Container = styled(Form)``;
