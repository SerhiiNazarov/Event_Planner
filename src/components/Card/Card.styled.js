import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export const BtnMoreinfo = styled.button`
  display: none;
  margin-left: 142px;
  width: 114px;
  color: #ffffff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  background-color: #7b61ff;
  border-radius: 8px;
  padding: 10px 24px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 2px 4px 9px 0px #7b61ff;
  }

  @media screen and (min-width: 768px) {
    margin-left: 202px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 172px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 336px;
  transition: all 0.3s ease-out;
`;

export const Container = styled.div`
  position: relative;
  width: 272px;
  height: 480px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  transition: all 0.3s ease-out;
  overflow: hidden;

  &:hover {
    box-shadow: 2px 4px 9px 0px #7b61ff;
  }

  &:hover ${Img} {
    height: 280px;
  }

  &:hover ${BtnMoreinfo} {
    display: block;
  }

  @media screen and (min-width: 768px) {
    width: 332px;
  }

  @media screen and (min-width: 1440px) {
    width: 302px;
  }
`;

export const Description = styled.div`
  padding: 16px;
`;

export const EventName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1c1b1f;
`;

export const Text = styled.p`
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #49454f;
`;

export const DateWrp = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  background: #ffffff;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const Date = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;

  color: #7b61ff;
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  position: absolute;
  background: transparent;
  right: 10px;
  top: 10px;
  border: none;
  z-index: 2;
`;

export const IconDeleteBtn = styled(AiOutlineCloseCircle)`
  width: 25px;
  height: 25px;
  color: #7b61ff;

  &:hover {
    color: #6243ff;
    scale: 1.2;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;

export const CatListWrp = styled.div`
  position: absolute;
  display: flex;
  z-index: 9;
  gap: 12px;
  padding: 12px;
`;
