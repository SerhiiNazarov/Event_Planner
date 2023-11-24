import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { ReactComponent as Chevron_left } from 'assets/chevron-left.svg';
import { ReactComponent as Chevron_right } from 'assets/chevron-right.svg';

export const NextLabelElement = styled(Chevron_right)`
  width: 44px;
  height: 44px;
  stroke: inherit;
  fill: inherit;
`;

export const PreviousLabelElement = styled(Chevron_left)`
  width: 44px;
  height: 44px;
  stroke: inherit;
  fill: inherit;
`;

export const Paginate = styled(ReactPaginate)`
  height: 84px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 20px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;

  .paginationItemArrow {
    stroke: #7b61ff;
    fill: #7b61ff;
  }

  .paginationLink {
    cursor: pointer;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 800;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    fill: #bcbcbc;
    stroke: #bcbcbc;

    color: #aca7c3;
  }

  .disabled {
    color: #bcbcbc;
  }

  .disabledLink {
    cursor: auto;
    stroke: #bcbcbc;
  }

  .activeLink {
    font-size: 24px;
  }
`;
