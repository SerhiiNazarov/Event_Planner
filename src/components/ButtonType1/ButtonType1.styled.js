import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 193px;
  height: 56px;
  color: #ffffff;
  font-size: 16px;
  background-color: #7b61ff;
  border-radius: 8px;
  padding: 10px 16px;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #6243ff;
  }
`;
