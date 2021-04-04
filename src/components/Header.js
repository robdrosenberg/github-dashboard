import React from "react"
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Header = ({ pageTitle }) => {
  return (
    <StyledHeader>
      <Link to="/">AstrumU</Link>
      <h2>{pageTitle}</h2>
      <Profile>
        <p>John Smith</p>
        <Avatar>A</Avatar>
      </Profile>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10rem;
  justify-items: center;
  align-items: center;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 15px 5px rgba(156, 142, 142, 0.4);
  padding: 1rem;
  a {
    color: #FA9256;
    font-size: 2rem;
    text-decoration: none;
    :visited {
      color: #FA9256;
    }
    font-weight: 700;
  }
  a, h2 {
    margin: 0;
  }
`
const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #979797;
    margin: 0;
  }
`

const Avatar = styled.div`
  padding: 1rem;
  line-height: 10px;
  border-radius: 15px;
  background-color: lightgray;
  display: inline-block;
  margin-left: 1rem;
`

export default Header