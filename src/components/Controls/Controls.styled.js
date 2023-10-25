import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SortsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
