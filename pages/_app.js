import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  "primary" : "#4DF530",
  "secondary" : {
      "bright" : "#8EF77B",
      "dark" : "#267517",
      "white" : "#ffffff",
      "black" : "#000000",
      "grey" : "#C0C0C0",
      "red" : "#ff0000",
      "darkred": "#8b1000"
  },
  "messages": {
    "error": {
      "background": "FFD6D6",
      "border": "7A0000"
    },
    "success": "7A0000"
  }
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    
    cursor: default;
    
    font-family: 'Poppins', sans-serif;
    
    ::selection{
      background: ${theme.secondary.dark};
    }
  }
  html{
    scroll-behavior: smooth;
  }
  a{
    text-decoration: none;
    color: ${theme.primary};
    transition: color 0.3s ease-in-out;
    
    :hover{
      color: ${theme.secondary.dark};
      transition: color 0.3s ease-in-out;
      cursor: pointer;
    }
  }
`

function Index({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
        <ThemeProvider  theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
    </>
  )
}

export default Index;