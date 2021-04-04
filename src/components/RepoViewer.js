import React from "react"
import { useEffect, useState } from 'react'
import Layout from './Layout'
import styled from '@emotion/styled'
import get from "lodash/fp/get"
import Issues from './Issues'
import { IconContext } from "react-icons"
import { RiFoldersLine, RiMailLine } from 'react-icons/ri'
import { IoSpeedometerOutline } from 'react-icons/io5'

// TODO: Style Loadmore, Style languages, add fork
// TODO: State for issues

const RepoViewer = ({ data }) => {
  const [repoIssues, setRepoIssues] = useState([])
  const ownerName = get("viewer.name", data)
  const ownerLogin = get("viewer.login", data)
  const ownerEmail = get("viewer.email", data)
  const repositoryData = get("viewer.repositories", data)

  // useEffect (() => {
  //   set
  // }, [])

  const handleIssues = (issues) => {
    console.log("Handled?")
    setRepoIssues(issues)
  }

  console.log("Issues", repoIssues)
  return (
    <Layout pageTitle="Repositories">
      <RepoOverview>
        <div>
          <p>{ownerName} ({ownerLogin})</p>
          <p style={{ display: "flex" }}>
            <IconContext.Provider value={{ size: "1.25em" }}>
              <div style={{ marginRight: "5px" }}>
                <RiMailLine />
              </div>
            </IconContext.Provider>
            {ownerEmail ? ownerEmail : "robdrosenberg@gmail.com"}</p>
          <p style={{ display: "flex" }}>
            <IconContext.Provider value={{ size: "1.25em" }}>
              <div style={{ marginRight: "5px" }}>
                <IoSpeedometerOutline />
              </div>
            </IconContext.Provider>
            {repositoryData.totalCount}</p>
          <RepoContainer>
            {repositoryData.nodes.map((repository, index) => {
              const languages = get("languages.nodes", repository)
              console.log(repository)
              const issues = get("issues.nodes", repository)
              return (
                <Repo key={index} onClick={() => handleIssues(issues)}>
                  <IconContext.Provider value={{ size: "3em" }}>
                    <div style={{ justifySelf: 'center' }}>
                      <RiFoldersLine />
                    </div>
                  </IconContext.Provider>
                  <RepoData>
                    <h3>{repository.name}</h3>
                    <p>{repository.description}</p>
                    <Languages>
                      {languages.map((language, languageIndex) => {
                        return (
                          <li key={languageIndex}>{language.name}</li>
                        )
                      })}
                    </Languages>
                  </RepoData>
                </Repo>
              )
            })}
          </RepoContainer>
          <button>Load More</button>
        </div>
        <Issues selectedIssues={repoIssues} />
      </RepoOverview>
    </Layout>
  )
}

const RepoOverview = styled.div`
  display: grid;
  grid-template-columns: .5fr 1fr;
  align-items: center;
  grid-column-gap: 50px;
`
const RepoContainer = styled.div`
  padding: 1rem 5rem 1rem 0;
  max-height: 80%;
  overflow-y: scroll;
  div:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const Repo = styled.div`
  height: 120px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: .5fr 1fr;
  align-items: center;
  cursor: pointer;
  transition: 300ms ease-in;
  box-shadow: 3px 5px 10px 0px rgba(48, 44, 44, 0.5);
  :hover {
    box-shadow: none;
  }
`

const RepoData = styled.div`
  width: 250px;
  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

const Languages = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  li:not(:last-child){
    margin-right: 1rem;
  }
`

export default RepoViewer