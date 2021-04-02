import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  "primary" : "#4DF530",
  "secondary" : {
      "bright" : "#8EF77B",
      "dark" : "#267517",
      "white" : "#ffffff",
      "black" : "#000000"
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
    font-family: sans-serif;
  }
  
  a{
    text-decoration: none;
  }
  a:visited{
    color: inherit;
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