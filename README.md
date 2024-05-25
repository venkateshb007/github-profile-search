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
     cd github-profile-search
3. Install dependencies: npm install

Usage
1. Start the development server: npm start

2. Open your browser and navigate to http://localhost:3000.
   
3. Enter a GitHub username in the search bar and hit enter to see the user's profile information.

Features

Search for GitHub users by username
Display user profile information including:
Name
Location
Email
Company
Blog
Member Since
Profile URL
Followers
Repositories
Gists
Following
Display user's repositories with stars and watchers count


Deployment
This project is deployed using GitHub Pages. To deploy your own version:
1. Install gh-pages:  npm install gh-pages --save-dev
2. Add the following to your package.json:

{
  "homepage": "http://venkateshb007.github.io/github-profile-search",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}

3. Deploy the application:  npm run deploy
4. Access your deployed app at http://venkateshb007.github.io/github-profile-search.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch for your feature (git checkout -b feature-name).
Make your changes and commit them (git commit -m 'Add new feature').
Push to the branch (git push origin feature-name).
Open a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Developed by Venkatesh B