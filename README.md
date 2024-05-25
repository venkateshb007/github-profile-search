# GitHub Profile Search

A React application to search and display GitHub user profile information using the GitHub API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/venkateshb007/github-profile-search.git
2. Navigate to the project directory:
   ```bash
     cd github-profile-search
3. Install dependencies: 
   ```bash
   npm install

Usage
1. Start the development server: 
   ```bash
   npm start

2. Open browser and navigate to http://localhost:3000.
   
3. Enter a GitHub username in the search bar and hit enter to see the user's profile information.

Features :
```bash
Search for GitHub users by username
Display user profile information including:
1. Name
2. Location
3. Email
4. Company
5. Blog
6. Member Since
7. Profile URL
8. Followers
```
Repositories :
```bash
1. Gists
2. Following
3. Display user's repositories with stars and watchers count
```

Deployment

This project is deployed using GitHub Pages. To deploy your own version:

1. Install gh-pages:
```bash
 npm install gh-pages --save-dev
```
2. Add the following to package.json:
```bash
{
  "homepage": "http://venkateshb007.github.io/github-profile-search",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy the application:
```bash
   npm run deploy

```
4. Access deployed app at
   ```bash
   http://venkateshb007.github.io/github-profile-search.

Contributing
Contributions are welcome! Please follow these steps:
```bash
Fork the repository.
Create a new branch for your feature (git checkout -b feature-name).
Make your changes and commit them (git commit -m 'Add new feature').
Push to the branch (git push origin feature-name).
Open a pull request.
```
License
This project is licensed under the MIT License - see the LICENSE file for details.

Developed by @Venkatesh B https://github.com/venkateshb007
