import React from "react"
import { useEffect, useState } from 'react'
import Layout from './Layout'
import styled from '@emotion/styled'
import get from "lodash/fp/get"
import Issues from './Issues'
import { IconContext } from "react-icons"
import { RiFoldersLine, RiMailLine } from 'react-icons/ri'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { useQuery, gql } from '@apollo/client'


// TODO: Style Loadmore, Style languages, add fork
// TODO: State for issues


const REPOSITORY_DATA = gql`
  query RepositoryData($totalRepos: Int) {
    viewer {
      login
      name
      avatarUrl
      email
      repositories(first: $totalRepos) {
        totalCount
        nodes {
          isFork
          name
          description
          id
          languages(first: 3) {
            nodes {
              name
            }
          }
          issues(first: 3) {
            nodes {
              title
              url
              bodyText
            }
          }
        }
      }
    }
  }
`

const RepoViewer = ({ }) => {
  const [repoFetchCount, setRepoFetchCount] = useState(5)
  const { loading, error, data } = useQuery(REPOSITORY_DATA, {
    variables: {
      totalRepos: repoFetchCount
    }
  })

  const [repoIssues, setRepoIssues] = useState([])
  const [repoID, setRepoID] = useState("")
  const ownerName = get("viewer.name", data)
  const ownerLogin = get("viewer.login", data)
  const ownerEmail = get("viewer.email", data)
  const repositoryData = get("viewer.repositories", data)


  const handleSelectedRepo = (issues, repoID) => {
    setRepoIssues(issues)
    setRepoID(repoID)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
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
              const issues = get("issues.nodes", repository)
              return (
                <Repo key={index} onClick={() => handleSelectedRepo(issues, repository.id)}>
                  <IconContext.Provider value={{ size: "3em" }}>
                    <div style={{ justifySelf: 'center' }}>
                      <RiFoldersLine />
                    </div>
                  </IconContext.Provider>
                  <RepoData>
                    {repository.isFork && <Fork>FORK</Fork>}
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
          <LoadMore onClick={() => setRepoFetchCount(repoFetchCount + 5)}>Load More</LoadMore>
        </div>
        <Issues selectedIssues={repoIssues} repoID={repoID} />
      </RepoOverview>
    </Layout>
  )
}

const RepoOverview = styled.div`
  display: grid;
  grid-template-columns: .3fr 1fr;
  align-items: center;
  grid-column-gap: 50px;
  overflow: hidden;
`
const RepoContainer = styled.div`
  padding: 1rem 5rem 1rem 0;
  height: 65vh;
  overflow: hidden;
  overflow-y: scroll;
  div:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const Repo = styled.div`
  height: 120px;
  border-radius: 15px;
  padding: 1rem;
  display: grid;
  grid-template-columns: .35fr 1fr;
  grid-template-rows: .1fr 1fr;
  align-items: center;
  cursor: pointer;
  transition: 300ms ease-in;
  box-shadow: 3px 5px 10px 0px rgba(48, 44, 44, 0.5);
  :hover {
    box-shadow: none;
  }
`

const Fork = styled.p`
  color: red;
  font-weight: 700;
  margin: 0.25rem 0;
  text-align: right;
`

const RepoData = styled.div`
  width: 250px;
  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

const LoadMore = styled.button`
  background-color: #5DA3F1;
  border: none;
  padding: 0.75rem 4rem;
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 5px;
  margin: 1rem auto;
  font-weight: 700;
  font-size: 1rem;
`

const Languages = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  li {
    background-color: #A9D6FF;
    border-radius: 5px;
    padding: .25rem;
  }
  li:not(:last-child){
    margin-right: 1rem;
  }
`

export default RepoViewer