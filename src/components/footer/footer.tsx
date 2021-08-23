import React from "react"
import styled from "styled-components"
import seekrLogo from './../../assets/images/homepage/seekr-logo-blue.png'

const Footer = (props) => {
  return (
    <FooterContainer>
      <div className="footer-wrapper">
        <InnerContainer>
          <FooterDetail>
            <FooterLogo src={seekrLogo} alt="logo" />
            <FooterDetailTitle>&copy; 2021 Seekr Inc. All Rights Reserved.</FooterDetailTitle>
            <FooterDetailText>Use of Seekr Inc.'s Services is subject to our <Link href="tos" target={"_blank"}>Terms of Service</Link>, <Link href="privacy" target={"_blank"}>Privacy Policy</Link>, and Licenses.</FooterDetailText>
            <FooterDetailText> Need help? Reach us at support@quoteseekr.com</FooterDetailText>
          </FooterDetail>
        </InnerContainer>
      </div>
    </FooterContainer>
  )
}

const Link = styled.a`
  color: white;
  text-decoration: none;
`

const FooterDetail = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.tablet_landscape}) {
  
  }
`
const FooterDetailTitle = styled.p`
  color: #1e2831;
  font-family: 'Macho-Semi'!important;
  text-align: center;
  margin: 25px 0px;
`
const FooterDetailText = styled.p`
  color: #707478;
  font-family: 'Macho Regular';
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 4px;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
     padding: 0px 20px;
  }
  a{
    color: #707478;
  }
`

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1060px;

  .footerTitle {
    margin: 96px 0 40px;

    @media only screen and (max-width: ${({ theme: { media } }) =>
    media.tablet_landscape}) {
      
    }
  }

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.tablet_landscape}) {
  
  }
`

const FooterContainer = styled.div`
 
  min-height: 248px;
  max-height: 1200px;
  position: relative;
  width: 100%;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.tablet_landscape}) {
    
  }
`

const FooterLogo = styled.img`

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.tablet_portrait}) {
    
  }
`

export default Footer;
