import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 25px;
  width: 272px;
  height: 1030px;
  background: #ffffff;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  border-radius: 8px;
  padding: 40px 16px;

  @media screen and (min-width: 768px) {
    width: 688px;
    height: 656px;
    padding: 40px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 1280px;
    height: 490px;
    padding: 40px;
  }
`;
