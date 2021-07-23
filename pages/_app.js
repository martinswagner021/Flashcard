import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  "primary" : "#4DF530",
  "secondary" : {
      "bright" : "#8EF77B",
      "dark" : "#267517",
      "white" : "#ffffff",
      "black" : "#000000"
  },
  "messages": {
    "error": {
      "background": "FFD6D6",
      "boder": "7A0000"
    },
    "success": "7A0000"
  }
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
  }
  *::selection{
    background: ${theme.secondary.dark};
  }
  html{
    scroll-behavior: smooth;
  }
  body{
    font-family: 'Poppins', sans-serif;
  }
  a{
    text-decoration: none;
    color: ${theme.primary};
    transition: color 0.3s ease-in-out;
  }
  a:hover{
    color: ${theme.secondary.dark};
    transition: color 0.3s ease-in-out;
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