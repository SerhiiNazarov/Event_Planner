import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #7b61ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
`;
