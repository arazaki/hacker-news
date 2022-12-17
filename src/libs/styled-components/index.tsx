import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles";
import { theme } from "./theme";
import { Props } from "./types";

const StyledProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledProvider;
