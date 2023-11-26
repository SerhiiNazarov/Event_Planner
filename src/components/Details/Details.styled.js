import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.p`
  font-family: Poppins;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;
`;

export const DetailsWrapepr = styled.div`
  width: 272px;

  @media screen and (min-width: 768px) {
    width: 688px;
  }

  @media screen and (min-width: 1440px) {
    width: 628px;
  }
`;
export const Container = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-top: 17px;
  }
`;

export const DetailsCard = styled.div`
  width: 272px;
  padding-bottom: 40px;
  margin-top: 24px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  @media screen and (min-width: 768px) {
    width: 688px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 14px;
    width: 628px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 168px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    height: 272px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 14px;
  }
`;

export const DetailsTxt = styled.p`
  margin: 24px 16px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;

  @media screen and (min-width: 768px) {
    margin: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin: 20px 10px;
  }
`;

export const CatListWrp = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 12px;
  margin-left: 16px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-left: 24px;
    margin-right: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const BtnListWrp = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 16px;
  justify-content: center;
  margin-left: 16px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    margin-left: 24px;
    margin-right: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 24px;
    margin-left: 40px;
    margin-right: 40px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
