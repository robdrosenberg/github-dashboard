import React from "react"
import styled from '@emotion/styled'
import { IconContext } from "react-icons"
import { VscIssues } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import get from "lodash/fp/get"

const Issues = ({ selectedRepo }) => {

  const repoIssues = get("issues.nodes", selectedRepo)
  const repoID = get("id", selectedRepo)

  return (
    <div>
      <IssuesContainer>
        {repoIssues && repoIssues.map((issue, index) => {
          return (
            <StyledIssue key={index} href={issue.url} target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ size: "3em" }}>
                <div style={{ justifySelf: 'center', padding: '2rem' }}>
                  <VscIssues />
                </div>
              </IconContext.Provider>
              <IssueData>
                <h3>{issue.title}</h3>
                <p>{issue.bodyText}</p>
              </IssueData>
            </StyledIssue>
          )
        })}
      </IssuesContainer>
      <CreateIssue to={"/new-issue/" + repoID} >Create Issue</CreateIssue>
    </div >
  )
}

const IssuesContainer = styled.div`
  margin-bottom: 3rem;
`

const StyledIssue = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #FFFFFF;
  margin-bottom: 2rem;
  height: 150px;
  border-radius: 10px;
  box-shadow: 3px 5px 10px 0px rgba(48, 44, 44, 0.5);
  transition: 300ms ease-in;
  color: #000000;
  width: 50%;
  :visited {
    color: #000000;
  }
  :hover {
    box-shadow: none;
  }
`

const IssueData = styled.div`
  margin-left: 2rem;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 600px;
    }
`

const CreateIssue = styled(Link)`
  background-color: #F15D5D;
  border: none;
  padding: 0.75rem 4rem;
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 5px;
  margin: 2rem auto;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
`

export default Issues