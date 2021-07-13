# [SmartBrain](https://dandydo.github.io/smartbrain) Facial Recognition


A React.js project that detects any faces in an image. Just send it the image link and let the facial recognition AI detect anyone's face.


### Deploying to gh-pages (for any new React.js projects)

1. Install gh-pages https://www.npmjs.com/package/gh-pages
NOTE: make sure that git repo is already pushed and you are at the project's repo
2. Open package.json and add
#### `"homepage": "http://github-username.github.io/github-repo-name"`
3. add to "scripts" in package.json
#### `"predeploy": "npm run build",`
#### `"deploy": "gh-pages -d build"`
4. deploy to gh-pages
#### `npm run deploy`

Optional: update your repo with your changes.

Now everything should be set up (you don't have to select the gh-pages branch in Pages since that has already done automatically.
