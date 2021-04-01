import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'

// const client = new ApolloClient({
//   uri: 'https://api.spacex.land/graphql/',
//   cache: new InMemoryCache(),
// });

// {
//   viewer {
//     login
//     avatarUrl
//     email
//     repositories(first: 10) {
//       totalCount
//       nodes {
//         isFork
//         name
//         description
//         languages(first: 3) {
//           nodes {
//             name
//           }
//         }
//       }
//     }
//   }
// }


const testData = {
  "data": {
    "viewer": {
      "login": "robdrosenberg",
      "avatarUrl": "https://avatars.githubusercontent.com/u/20813991?u=177d27590cdd19aa11a2bd835f95a119b03fd640&v=4",
      "email": "",
      "repositories": {
        "totalCount": 50,
        "nodes": [
          {
            "isFork": false,
            "name": "playstation",
            "description": "WordPress Theme & Plugins",
            "languages": {
              "nodes": [
                {
                  "name": "HTML"
                },
                {
                  "name": "PHP"
                },
                {
                  "name": "CSS"
                }
              ]
            }
          },
          {
            "isFork": false,
            "name": "euler_problems",
            "description": "A rep for my solutions to projecteuler.net problems",
            "languages": {
              "nodes": [
                {
                  "name": "Ruby"
                }
              ]
            }
          },
          {
            "isFork": false,
            "name": "actlc_OOP_Todo",
            "description": "todo app for actualize",
            "languages": {
              "nodes": [
                {
                  "name": "Ruby"
                }
              ]
            }
          },
          {
            "isFork": false,
            "name": "daily_problems",
            "description": "repo for all my daily problem solutions",
            "languages": {
              "nodes": [
                {
                  "name": "Ruby"
                }
              ]
            }
          },
          {
            "isFork": false,
            "name": "mini_capstone",
            "description": null,
            "languages": {
              "nodes": [
                {
                  "name": "Ruby"
                },
                {
                  "name": "HTML"
                },
                {
                  "name": "CSS"
                }
              ]
            }
          }
        ]
      }
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App data={testData.data} />
    {/* <ApolloProvider client={client}>
      <App />
    </ApolloProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
