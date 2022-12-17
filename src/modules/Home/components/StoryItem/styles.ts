import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.text.dark};
  padding: 1rem 2rem;
  & > div {
    & > label {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      color: ${({ theme }) => theme.colors.dark[300]};
    }
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
