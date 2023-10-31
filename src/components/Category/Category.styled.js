import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  /* display: flex; */
  padding: 7px 12px;
  border-radius: 8px;
  box-shadow: 4px 5px 9px 0px #a68dae47;

  background: #ffffff;
`;

export const CategoryTxt = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: ${props => props.theme};
`;
