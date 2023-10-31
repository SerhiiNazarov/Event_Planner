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
  width: 628px;
  margin-top: 17px;
  margin-right: auto;
  margin-left: auto;
`;

export const DetailsCard = styled.div`
  width: 628px;
  height: 492px;
  margin-top: 14px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
`;

export const Image = styled.img`
  width: 628px;
  height: 272px;
  border-radius: 8px;
`;

export const DetailsTxt = styled.p`
  margin: 20px 10px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
`;

export const CatListWrp = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const BtnListWrp = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 16px;
  justify-content: flex-end;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
