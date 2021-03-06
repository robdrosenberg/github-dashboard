import React from "react"
import styled from '@emotion/styled'

const Footer = ({ }) => {
  return (
    <StyledFooter>
      <p>Need help? <a href="mailto:support@astrumu.com">Contact Us</a></p>
      <h1>AstrumU</h1>
      <FooterLinks>
        <a href="https://i.imgflip.com/1n560d.jpg">Terms of Service</a>
        <a href="https://cnet1.cbsistatic.com/img/FzmT3adMw_wV1E619gW697o90_A=/670x503/2018/05/25/61d9d859-fc4e-4ae6-93e1-014562b103f4/gdpr.jpg">Privacy Policy</a>
      </FooterLinks>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10rem;
  justify-items: center;
  align-items: center;
  padding: 1rem 0;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 15px 5px rgba(156, 142, 142, 0.4);
  h1 {
    margin: 0;
    color: #FA9256;
    font-size: 2rem;
  }
  p, p>a {
    margin: 0;
    color: #979797;
    font-weight: 800;
    a:visited {
      color: #979797;
    }
  }
`

const FooterLinks = styled.div`
  a {
    text-decoration: none;
    font-weight: 800;
    &:visited {
      color: #979797;
    }
  }
  a:last-child {
    margin-left: 1rem;
  }
`

export default Footer