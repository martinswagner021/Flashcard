import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  "primary" : "#",
  "secondary" : {
      "main" : "#",
      "bright" : "#",
      "dark" : "#",
      "white" : "#f4f9f9",
      "black" : "#000000"
  }
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
  }
  *::selection{
    background: default;
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