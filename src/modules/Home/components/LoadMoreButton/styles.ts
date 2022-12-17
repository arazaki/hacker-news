import styled from "styled-components";
export const Button = styled.button`
  min-height: 4rem;
  width: 70%;
  border: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  color: ${(p) => p.theme.colors.text.light};
  background-color: ${(p) => p.theme.colors.success[900]};
  font-size: 1.8rem;
  cursor: pointer;
`;
