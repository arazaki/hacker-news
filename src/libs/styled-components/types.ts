import "styled-components";

export type Props = {
  children: React.ReactNode;
};

type Colors = {
  default: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: Colors;
      secondary: Colors;
      success: Colors;
      warning: Colors;
      danger: Colors;
      dark: Colors;
      light: Colors;
      text: {
        light: string;
        dark: string;
      };
      background: {
        light: string;
        dark: string;
      };
    };
    fonts: {
      body: string;
      heading: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    medias: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
