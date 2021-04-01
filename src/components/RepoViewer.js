import React from "react"
import styled from '@emotion/styled'
import get from "lodash/fp/get"
import Issues from './Issues'
import { IconContext } from "react-icons"
import { RiFoldersLine } from 'react-icons/ri'


const RepoViewer = ({ data }) => {
  const ownerName = get("viewer.login", data)
  const ownerEmail = get("viewer.email", data)
  const repositoryData = get("viewer.repositories", data)
  console.log(repositoryData.nodes)
  return (
    <RepoOverview>
      <div>
        <p>{ownerName}</p>
        <p>{ownerEmail ? ownerEmail : "robdrosenberg@gmail.com"}</p>
        <p>{repositoryData.totalCount}</p>
        <RepoContainer>
          {repositoryData.nodes.map((repository, index) => {
            const languages = get("languages.nodes", repository)
            return (
              <Repo key={index}>
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
      <Issues />
    </RepoOverview>
  )
}

const RepoOverview = styled.div`
  display: grid;
  grid-template-columns: .5fr 1fr;
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
  border: 2px solid black;
  height: 120px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: .5fr 1fr;
  align-items: center;
  cursor: pointer;
  transition: 200ms ease-in;
  :hover {
    box-shadow: 3px 3px 10px 0px rgba(48, 44, 44, 0.5);
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