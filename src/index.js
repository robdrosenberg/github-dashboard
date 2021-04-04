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
      "name": "Robert Rosenberg",
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
            },
            "issues": {
              "nodes": [
                {
                  "title": "Vulnerability Scan Results",
                  "url": "https://github.com/humanmade/playstation/issues/29",
                  "bodyText": "(@prettyboymp - not sure who this should go to, figured you would know)...\nThe blog.us.playstation.com site is in no immediate danger - since the site uses Sphinx, any searches aren't actually queried directly against the database.\nBut we do need to fix an issue here where an attempted SQL injection attack is echoed  back to the page triggering a false positive on Qualys' side that the site is vulnerable.\nLink:\nhttp://blog.us.playstation.com/?s=1&video_id=jT61edcFvRI&post_link=http://blog.us.playstation.com/2013/07/23/playstation-home-kick-back-in-the-diamond-beachmansion/&age_gate=0&width=437&height=271 AND 'f'LIKE'f&sort=date&paged=1\n\nThe filter buttons (Match, Date, Title, Comments) include any parameters that were passed in. Ideally, the links should only contain the parameters needed to conduct/filter/sort the search, and drop any other parameters.\nI know there was supposed to be a roll-out this week, but if this could be fixed ahead of that (especially if it's been post-poned to after July) it'd be ideal and appreciated."
                },
                {
                  "title": "Cache busting on the main stylesheet...",
                  "url": "https://github.com/humanmade/playstation/issues/45",
                  "bodyText": "It's wrapped in a call to voce_cache_buster but it's outputting the URL without any query string version. I've short circuited it for now so that it gets purged out of the DDoS mitigation service cache."
                },
                {
                  "title": "Fatal error for WP Touch plugin...",
                  "url": "https://github.com/humanmade/playstation/issues/47",
                  "bodyText": "PHP Fatal error:  require_once(): Failed opening required '/usr/local/htm\nl/releases/20131205152713/wp/wp-content/themes/twenty11/plugins/jwplayer/jwplayer.php' (include_path='.:/usr/share/pear:/usr/share\n/php') in /usr/local/html/releases/20131205152713/wp-content/plugins/wptouch/wptouch.php on line 321\n\nSeeing a bunch of these in logs this morning, and probably since yesterday's release, for the above. The problem is with WP in a sub-folder, it's looking in /wp/wp-content, but should just be looking in /wp-content."
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
            },
            "issues": {
              "nodes": [
                {
                  "title": "Testing",
                  "url": "https://github.com/humanmade/playstation/issues/29",
                  "bodyText": "testing issues"
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
            },
            "issues": {
              "nodes": [
                {
                  "title": "More testing",
                  "url": "https://github.com/humanmade/playstation/issues/29",
                  "bodyText": "testing issues"
                },
                {
                  "title": "Second testing issues!",
                  "url": "https://github.com/humanmade/playstation/issues/29",
                  "bodyText": "testing issues again woohooo"
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
            },
            "issues": {
              "nodes": []
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
            },
            "issues": {
              "nodes": []
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
