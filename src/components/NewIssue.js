import React from 'react'
import styled from '@emotion/styled'
import { useState } from 'react'
import Layout from './Layout'
import { gql, useMutation } from '@apollo/client';
import { Redirect, useParams } from 'react-router-dom'

const NEW_ISSUE = gql`
  mutation NewIssue($repoID: String!, $title: String!, $body: String!) {
    createIssue(input: {repositoryId: $repoID, title: $title , body: $body}) {
      issue {
        id
        title
        body
      }
    }
  }
`

const NewIssue = ({ }) => {

  const [toRepositories, setToRepositories] = useState(false)
  const [formState, setFormState] = useState({
    title: '',
    body: ''
  })

  const [createIssue] = useMutation(NEW_ISSUE, {
    variables: {
      repoID: useParams().repoID,
      title: formState.title,
      body: formState.body
    }
  })

  if (toRepositories === true) {
    return <Redirect to='/' />
  }

  return (
    <Layout pageTitle="Create an Issue">
      <FormContainer>
        <form onSubmit={e => {
          e.preventDefault()
          createIssue().then(setToRepositories(true))
        }}>
          <h3>Submit Issue</h3>
          <input required type="text" placeholder="Title" value={formState.title} onChange={(e) => setFormState({
            ...formState,
            title: e.target.value
          })} />
          <textarea required type="textarea" placeholder="Description" value={formState.body} onChange={(e) => setFormState({
            ...formState,
            body: e.target.value
          })} />
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </FormContainer>
    </Layout>
  )
}

const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 3px 5px 10px 0px rgba(48, 44, 44, 0.5);
  width: 600px;
  margin: 5rem auto;
  padding: 2rem 0;
  text-align: center;
  form {
    input, textarea {
      display: block;
      margin: 1rem auto;
      width: 250px;
      border-radius: 10px;
      border: none;
      background-color: #F8F4F4;
      padding: 1rem;
    }

    textarea {
      height: 150px;
      font-family: 'Arial';
    }
  }
`

const SubmitButton = styled.button`
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

export default NewIssue