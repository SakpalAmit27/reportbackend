require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use port from .env file, default to 3000

const githubData = { 
  //  url source : https://api.github.com/users/SakpalAmit27 //
    "login": "SakpalAmit27",
    "id": 145037496,
    "node_id": "U_kgDOCKUYuA",
    "avatar_url": "https://avatars.githubusercontent.com/u/145037496?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SakpalAmit27",
    "html_url": "https://github.com/SakpalAmit27",
    "followers_url": "https://api.github.com/users/SakpalAmit27/followers",
    "following_url": "https://api.github.com/users/SakpalAmit27/following{/other_user}",
    "gists_url": "https://api.github.com/users/SakpalAmit27/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SakpalAmit27/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SakpalAmit27/subscriptions",
    "organizations_url": "https://api.github.com/users/SakpalAmit27/orgs",
    "repos_url": "https://api.github.com/users/SakpalAmit27/repos",
    "events_url": "https://api.github.com/users/SakpalAmit27/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SakpalAmit27/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sakpal Amit",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "I Compose🎵 🎼  ,\r\nI Code :goberserk: :godmode: ",
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-09-14T14:53:22Z",
    "updated_at": "2024-05-18T12:37:06Z"
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Custom request
app.get('/twitter', (req, res) => {
    res.send("You are now on twitter.com");
});

// Another request
app.get('/github', (req, res) => {
  res.json(githubData);
});

app.get('/login', (req, res) => {
    res.send('<h1>You are now on login page</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
