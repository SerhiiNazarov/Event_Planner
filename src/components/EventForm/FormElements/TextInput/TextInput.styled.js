import styled from 'styled-components';
import { Field } from 'formik';

export const Input = styled(Field)`
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

export const Textarea = styled.textarea`
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
