import styled from 'styled-components';

import { MdClose } from 'react-icons/md';

export const BtnClose = styled.button`
  position: absolute;
  right: 12px;
  background: transparent;
  border: none;
  top: 40px;
`;

export const Icon = styled(MdClose)`
  width: 20px;
  height: 20px;
  /* 
  right: 12px;
  top: 41px; */
  color: #aca7c3;

  &:hover {
    color: #7b61ff;
    scale: 1.2;
  }
`;
