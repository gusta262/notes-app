import "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    white: string;
    background: string;
    primary: string;
    secondary: string;
    textPrimary: string;
    inputText: string;
    plusButton: {
      background: string;
      plus: string;
    };
  }
}
