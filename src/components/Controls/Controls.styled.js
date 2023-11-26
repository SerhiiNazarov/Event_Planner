import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Plus } from 'assets//plus.svg';

export const Container = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 60px;
    align-items: center;
  }
`;

export const SortsWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  height: 56px;
`;

export const TextAddBtn = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const IconPlus = styled(Plus)`
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`;
