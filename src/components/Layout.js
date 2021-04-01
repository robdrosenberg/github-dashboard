import React from "react"
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Helmet>
        <title>Astrumu | {pageTitle}</title>
      </Helmet>
      <Container>
        <Header pageTitle={pageTitle} />
        <Main>{children}</Main>
        <Footer />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 100px;
  height: 100vh;
  grid-template-areas: 
    'header'
    'main'
    'footer'
  ;
  Header {
    grid-area: header;
  }
  Main {
    grid-area: main;
    padding: 1rem 5rem;
  }

  Footer {
    grid-area: footer;
  }

`

const Main = styled.main`
  background-color: #FAFBFC;
  height: 70vh;
`

export default Layout