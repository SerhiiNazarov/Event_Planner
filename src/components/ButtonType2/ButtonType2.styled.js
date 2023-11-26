import styled from 'styled-components';

export const Btn = styled.button`
  height: 56px;
  cursor: pointer;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;

  min-width: 75px;
  padding: 12px 10px;
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
