import styled from 'styled-components';

export const InputFile = styled.input`
  padding: 12px 32px 12px 12px;
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

export const AltText = styled.p`
  font-family: Poppins;
  color: #3f3f3f;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
`;

export const AltTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 35px 5px 12px;
  border: 1px solid #aca7c3;
  outline: transparent;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  &:hover {
    border-color: #7b61ff;
  }

  &:hover ${AltText} {
    color: #7b61ff;
  }
`;

export const ReloadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 193px;
  height: 44px;
  color: #ffffff;
  font-size: 16px;
  background-color: #7b61ff;
  border-radius: 8px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #6243ff;
  }
`;
