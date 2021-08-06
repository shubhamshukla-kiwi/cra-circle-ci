import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterDetail>
      <FooterDetailText>© 2020 Seeker Inc. All Rights Reserve.</FooterDetailText>
      <FooterDetailText>Use of Seeker Inc. Services is subject to our<br /> Terms of Service, Privacy Policy, and Licenses.</FooterDetailText>
      <FooterDetailText> Need help? Reach us at support@quoteseekr.com</FooterDetailText>
    </FooterDetail>
  )
}

const FooterDetail = styled.div`
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
  bottom: 0%;
  display: flex;
  flex-direction: column;
  height: 170px;
  justify-content: center;
  left: 0;
  padding: 56px 0px 54px;
  position: relative;
  width: 100%;

  @media only screen and (max-width: ${({ theme: { media } }) =>
      media.tablet_landscape}) {
    padding: 36px 0px 24px;
  }
`

const FooterDetailText = styled.p`
  color: ${({ theme: { colors } }) => colors.bg };
  font-family: 'Macho Regular';
  font-size: 12px;
  line-height: 90%;
  letter-spacing: 0.07em;
  margin-bottom: 8px;
  max-width: 326px;
  text-align: center;
`

export default Footer;
