# [SmartBrain](https://dandydo.github.io/smartbrain) detects any faces in an image. Just send it the link to the image and check out if it detects anyone's face.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Deploying to gh-pages (for any new React.js projects)

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
