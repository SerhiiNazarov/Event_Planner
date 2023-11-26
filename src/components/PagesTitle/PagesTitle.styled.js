import styled from 'styled-components';

export const Title = styled.h2`
  margin-top: 24px;
  color: #3f3f3f;

  display: ${props => props.theme};
  font-weight: 600;
  font-size: 34px;
  line-height: 48px;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 17px;
  }
`;
