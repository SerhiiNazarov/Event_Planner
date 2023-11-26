import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 40px;
  gap: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px 24px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px 24px;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
  }
`;
