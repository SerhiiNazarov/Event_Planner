import styled from 'styled-components';
import mainbgx1 from 'assets/mainbgx1.png';

export const Container = styled.div`
  width: 320px;
  height: auto;
  padding: 24px;

  margin-left: auto;
  margin-right: auto;

  background-image: url(${mainbgx1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 120px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 22px;
  }
`;
