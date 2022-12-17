import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.primary[800]};
  padding: 1rem 2rem;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
