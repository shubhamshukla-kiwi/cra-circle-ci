import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"

import { GlobalStyle } from "../../theme/global-style"
import { useTitle } from '../../hooks/useTitle';
import favicon from "./../../assets/images/favicon.ico"
import Footer from "../footer/footer_alt"

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1.5, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 40, // rem
      md: 50, // rem
      lg: 64.375  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 40, // em
      md: 62.938, // em
      lg: 87.5  // em
    }
  },
  media: {
    tablet_landscape: '1200px',
    tablet_portrait: '1024px',
    mobile_landscape: '768px',
    mobile_portrait: '480px',
  },
  colors: {
    dark: '#2B2D3E',
    white: '#f1f1f1',
    gradient: '#6244fd',
    gray: '#4F4F4F',
    blue: '#1734ff',
    blueLight: '#D0DBF3',
    black: '#04000A',
    mute: '#EEEEEE',
    smoky: '#F4F4F4',
    gold: '#f5de38',
    yellow: '#FCD344',
    bg: '#F6F6F6',
    red: '#F25F5C'
  }
}

const Layout = ({ children, visibleFooter, bgColor, title }) => {
  useTitle(title);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <script>{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '739532226774255');
        fbq('track', 'PageView');`} 
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=739532226774255&ev=PageView&noscript=1" />`}</noscript>
        <link rel="icon" href={favicon} />
      </Helmet>
      <GlobalStyle theme="default" />
      <Main bgWhite={bgColor}>{children}</Main>
      { visibleFooter && 
        <Footer />
      }
    </ThemeProvider>
  )
}

export default Layout

export const Main = styled.main`
  background: ${props => props.bgWhite};
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: calc(100% - 170px);
  width: 100%;
`;
