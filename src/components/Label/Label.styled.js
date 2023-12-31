import styled from 'styled-components';

export const LabelInput = styled.label`
  position: relative;
  width: 240px;
  color: #7b61ff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.4px;

  @media screen and (min-width: 768px) {
    width: 308px;
  }

  @media screen and (min-width: 1440px) {
    width: 372px;
  }
`;
