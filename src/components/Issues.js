import React from "react"
import styled from '@emotion/styled'
import { IconContext } from "react-icons"
import { VscIssues } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const Issues = ({ selectedIssues }) => {
  console.log("Selected ISsues", selectedIssues)
  if (selectedIssues.length > 0) {

    return (
      <div>
        {selectedIssues && selectedIssues.map((issue) => {
          return (
            <StyledIssue href={issue.url} target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ size: "3em" }}>
                <div style={{ justifySelf: 'center' }}>
                  <VscIssues />
                </div>
              </IconContext.Provider>
              <div>
                <h3>{issue.title}</h3>
                <p>{issue.bodyText}</p>
              </div>
            </StyledIssue>
          )
        })}
        <Link to="/new-issue">Create Issue</Link>
      </div>
    )
  } else {
    return (
      <p>No issues to display</p>
    )
  }
}

const StyledIssue = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #FFFFFF;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 3px 5px 10px 0px rgba(48, 44, 44, 0.5);
  transition: 300ms ease-in;
  :visited {
    color: #000000;
  }
  :hover {
    box-shadow: none;
  }
  div {
    max-width: 50vw;
    margin-left: 25px;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

`

export default Issues