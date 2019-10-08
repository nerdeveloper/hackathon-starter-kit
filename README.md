
# Hackathon Starter Kit(Node-Typescript/Express)

A Node-Typescript/Express Boilerplate with Authentication(Local, Github, Facebook, Twitter, Google, LinkedIn, Dropbox, Slack, Discord), Authorization, and CRUD functionality + PWA Support!

![hackathon-starter-kit](public/snap/image.png)

**Live Demo:** <https://hackathon-slhbx5lcqq-uc.a.run.app>

Jump to [What's new?](https://github.com/sahat/hackathon-starter/blob/master/CHANGELOG.md)

A boilerplate for **Node.js/Express(Typescript)** web applications.

If you have attended any hackathons in the past, then you know how much time it takes to
get a project started: decide on what to build, pick a programming language, pick a web framework,
pick a CSS framework. A while later, you might have an initial project up on GitHub and only then
can other team members start contributing. Or how about doing something as simple as *Sign in with Facebook*
authentication? You can spend hours on it if you are not familiar with how OAuth 2.0 works.

The Node-Typescript/Express Hackathon Starter Kit is production ready with authentication, sessions, routing, CRUD functionality and PWA Support!

## Table of Contents

-----------------

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Obtaining API Keys](#obtaining-api-keys)
- [Project Structure](#project-structure)
- [List of Packages](#list-of-packages)
- [Useful Tools and Resources](#useful-tools-and-resources)
- [Recommended Design Resources](#recommended-design-resources)
- [Recommended Node.js Libraries](#recommended-nodejs-libraries)
- [Cheatsheets](#cheatsheets)
  - [Typescript](#typescript)
  - [Mongoose Cheatsheet](#mongoose)
- [Deployment](#deployment)
- [Docker](#docker)
- [Production](#production)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

## Features

-----------------

- **Local Authentication** using Email and Password
- **OAuth 1.0a Authentication** via Twitter
- **OAuth 2.0 Authentication** via Facebook, Google, GitHub, LinkedIn, Slack, Discord, Dropbox.
- Flash notifications
- MVC Project Structure
- Node.js clusters support
- Real-time Monitoring
- Webpack
- Css stylesheets
- Bootstrap 4 + Extra Themes
- Contact Form (powered by Sendgrid)
- PWA Support
- Google reCAPTCHA
- Realtime Monitoring
- HSTS, noSniff, Cross site scripting (XSS) protection and more.
- **Account Management**
  - Gravatar
  - Link multiple OAuth strategies to one account
  - Create a Post
  - Get a Post
  - Edit/Update a Post
  - Delete a Post
- **API Examples**: Facebook, Google, Dropbox, Twitter, LinkedIn and more.

## Prerequisites

-----------------

- [MongoDB](https://www.mongodb.com/download-center/community)
- [Node.js 8.0+](http://nodejs.org)
- [Visual Studio Code](https://code.visualstudio.com/download) *optional*

## Getting Started

-----------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/nerdeveloper/hackathon-starter-kit.git

# Change directory
cd hackathon-starter-kit

# Copy .env.example to .env
cp .env.variable.env variable.env

# Create a database (with MongoDB)
# Update variable.env file with database credentials

# DEV_MONGODB=mongodb://<username>:<password>@localhost/<database_name>

# Install NPM dependencies
npm install

# Then simply start your app
npm start
```

**Warning:** If you want to use some API that need https to work (for example Github or Facebook),
you will need to download [ngrok](https://ngrok.com/).
You must start ngrok after starting the project.

```bash
# Install the ngrok package
npm i -g ngrok

# start ngrok to intercept the data exchanged on port 8080
ngrok http 3000
```

Next, you must use the https URL defined by ngrok inside your [config file](src/config.ts) under **site**, for example, `https://<subdomain>.ngrok.io`

**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon).
It watches for any changes in your  node.js app and automatically restarts the
server. Once installed, instead of `node app.js` use `NODE_ENV=development nodemon dist/server.js --public`. It will
save you a lot of time in the long run, because you won't need to manually
restart the server each time you make a small change in code. To install, run
`npm install -g nodemon` or `sudo npm i -g nodemon

## Obtaining API Keys

-----------------

To use any of the included APIs or OAuth authentication methods, you will need
to obtain appropriate credentials: Client ID, Client Secret, API Key, or
Username & Password. You will need to go through each provider to generate new
credentials.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png" width="200">

- Visit <a href="https://cloud.google.com/console/project" target="_blank">Google Cloud Console</a>
- Click on the **Create Project** button
- Enter *Project Name*, then click on **Create** button
- Then click on *APIs & auth* in the sidebar and select *API* tab
- Click on **Google+ API** under *Social APIs*, then click **Enable API**
- Click on **Google Drive API** under *G Suite*, then click **Enable API**
- Click on **Google Sheets API** under *G Suite*, then click **Enable API**
- Next, under *APIs & auth* in the sidebar click on *Credentials* tab
- Click on **Create new Client ID** button
- Select *Web Application* and click on **Configure Consent Screen**
- Fill out the required fields then click on **Save**
- In the *Create Client ID* modal dialog:
  - **Application Type**: Web Application
  - **Authorized Javascript origins**: <http://localhost:3000>
  - **Authorized redirect URI**: <http://localhost:8080/auth/google/callback>
- Click on **Create Client ID** button
- Copy and paste *Client ID* and *Client secret* keys into `variable.env`

**Note:** When you ready to deploy to production don't forget to
add your new URL to *Authorized Javascript origins* and *Authorized redirect URI*,
e.g. `http://my-awesome-app.herokuapp.com` and
`http://my-awesome-app.herokuapp.com/auth/google/callback` respectively.
The same goes for other providers.`

-----------------

<img src="http://www.doit.ba/img/facebook.jpg" width="200">

- Visit <a href="https://developers.facebook.com/" target="_blank">Facebook Developers</a>
- Click **My Apps**, then select **Add a New App* from the dropdown menu
- Enter a new name for your app
- Click on the **Create App ID** button
- Find the Facebook Login Product and click on **Facebook Login**
- Instead of going through their Quickstart, click on **Settings** for your app in the top left corner
- Copy and paste *App ID* and *App Secret* keys into `variable.env`
- **Note:** *App ID* is **FACEBOOK_ID**, *App Secret* is **FACEBOOK_SECRET** in `variable.env`
- Enter `localhost` under *App Domains*
- Choose a **Category** that best describes your app
- Click on **+ Add Platform** and select **Website**
- Enter `http://localhost:3000` under *Site URL*
- Click on the *Settings* tab in the left nav under Facebook Login
- Enter `http://localhost:3000/auth/facebook/callback` under Valid OAuth redirect URIs

**Note:** After a successful sign in with Facebook, a user will be redirected back to the home page with appended hash `#_=_` in the URL. It is *not* a bug. See this [Stack Overflow](https://stackoverflow.com/questions/7131909/facebook-callback-appends-to-return-url) discussion for ways to handle it.

-----------------

<img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" width="110">

- Go to <a href="https://github.com/settings/profile" target="_blank">Account Settings</a>
- Select **Developer settings** from the sidebar
- Then inside click on **Register new application**
- Enter *Application Name* and *Homepage URL*
- For *Authorization Callback URL*: <http://localhost:3000/auth/github/callback>
- Click **Register application**
- Now copy and paste *Client ID* and *Client Secret* keys into `variable.env` file

-----------------

<img src="https://seeklogo.com/images/T/twitter-2012-positive-logo-916EDF1309-seeklogo.com.png" width="90">

- Sign in at <a href="https://apps.twitter.com/" target="_blank">https://apps.twitter.com</a>
- Click **Create a new application**
- Enter your application name, website and description
- For **Callback URL**: <http://localhost:3000/auth/twitter/callback>
- Go to **Settings** tab
- Under *Application Type* select **Read and Write** access
- Check the box **Allow this application to be used to Sign in with Twitter**
- Click **Update this Twitter's applications settings**
- Copy and paste *Consumer Key* and *Consumer Secret* keys into `variable.env` file

-----------------

<img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" width="200">

- Sign in at <a href="https://developer.linkedin.com/" target="_blank">LinkedIn Developer Network</a>
- From the account name dropdown menu select **API Keys**
  - *It may ask you to sign in once again*
- Click **+ Add New Application** button
- Fill out all the *required* fields
  - **OAuth 2.0 Redirect URLs**: <http://localhost:3000/auth/linkedin/callback>
  - **JavaScript API Domains**: <http://localhost:3000>
- For **Default Application Permissions** make sure at least the following is checked:
  - `r_liteprofile`
  - `r_emailaddress`
- Finish by clicking **Add Application** button
- Copy and paste *API Key* and *Secret Key* keys into `variable.env` file
  - *API Key* is your **clientID**
  - *Secret Key* is your **clientSecret**

  -----------------

<img src="https://sendgrid.com/brand/sg-logo-300.png" width="200">

- Go to <a href="https://sendgrid.com/user/signup" target="_blank">https://sendgrid.com/user/signup</a>
- Sign up and **confirm** your account via the *activation email*
- Then enter your SendGrid *Username* and *Password* into `variable.env` file

   -----------------

   <img src="https://discordapp.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png" width="200">

- Go to <a href="https://discordapp.com/developers/applications/" target="_blank">Discord Developer Portal </a>
- Sign up and **confirm** your account via the *activation email*

- Create an application by clicking on **NEW APPLICATION**

- Enter the name of Application and create it
- Click on the **Oauth2**  to fill in valid Redirection URL e.g *<http://localhost:3000/auth/discordapp/callback>* and save changes
- Copy your **CLIENT ID** and **CLIENT SECRET** into the `variable.env` file

   -----------------

   <img src="https://aem.dropbox.com/cms/etc.clientlibs/settings/wcm/designs/dropbox-birch/clientlib-all/resources/glyph-40.svg" width="200">

- Go to <a href="https://dropbox.com/developers/apps"
target="_blank">Dropbox Developer Portal </a>
- Sign up and **confirm** your account via the *activation email*

- Create an application by clicking on **CREATE APP**
- Fill out all the *required* fields
  - Select the **Dropbox API**
  - Choose the type of access you need
  - Enter the name of the app
- Click on **Create app**
- Fill our Redirection URLS valid Redirection URL e.g *<http://localhost:3000/auth/dropbox/callback>*
- Copy your **App key** and **App secret** into the `variable.env` file

 -----------------

   <img src="https://slackhq.com/wp-content/themes/babka/img/icons/icon_slack.svg" width="200">

- Go to <a href="https://api.slack.com/apps"
target="_blank">Slack Developer Portal </a>
- Sign up and **confirm** your account with your **Workspace’s Slack URL.**

- Create an application by clicking on **CREATE NEW APP**
- Fill out all the *required* fields
  - App name
  - Development Slack Workspace
  - Enter the name of the app
- Click on **Create app**
- Navigate to  *Oauth & Permission* and your Redirect URL e.g *<http://localhost:3000/auth/slack/callback>* and *Save URL*
- **Save changes**
- Copy your **Client ID** and **Client Secret** into the `variable.env` file

## Project Structure

   -----------------

| Name                                       | Description                                                                                                 |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| __tests__                                  | Contains your tests. Separate from source because there is a different build process.                       |
| .vscode                                    | Contains VS Code specific settings                                                                          |
| app                                        | Contains the distributable (or output) from your TypeScript build. This is the code you ship to production  |
| dist                                       | Contains the distributable (or output) from your TypeScript build. For Development only                     |
| **public**/**css**/style.css               | Contains custom css used in the application.                                                                |
| **public**/**dist**                        | Contains the output from your Webpack build.                                                                |
| **public**/**Images**                      | Contains all the icons used for the PWA.                                                                    |
| **public**/**js**/main.js                  | Contains custom javascript used in the frontend of the application.                                         |
| **public**/**snap**                        | Contains screenshots of the app used in the README file.                                                    |
| **public**/mainfest.json                   | The app manifest for the PWA.                                                                               |
| **public**/pwabuilder.js                   | Custom js files that register the service worker on the broswer.                                            |
| **public**/sw.js                           | The service worker for the application.                                                                     |
| **src**/**controllers**/authController.ts  | Controller for the passport authentication of the app{Login and Register}.                                  |
| **src**/**controllers**/indexController.ts | Controller for the app logic{home, contact, 404, 500}.                                                      |
| **src**/**controllers**/postController.ts  | Controller for the Post.                                                                                    |
| **src**/**handlers**/mail.ts               | Handles the sending of email of the app.                                                                    |
| **src**/**handlers**/passport.ts           | Handles all the authentication and authorisation of third party apps{Facebook, Twitter, LinkedIn and more}. |
| **src**/**models**/User.ts                 | Mongoose schema and model for User.                                                                         |
| **src**/**models**/Post.ts                 | Mongoose schema and model for User.                                                                         |
| **src**/**routes**/index.ts                | Contains all of the routing of the application except auth.                                                 |
| **src**/**routes**/auth.ts                 | Contains all of the routing of the authentication of third party applications.                              |
| **src**/app.ts                             | The main application file.                                                                                  |
| **src**/config.ts                          | Contains the Node environment of the app for both development and production.                               |
| **src**/server.ts                          | Entry point to your express app.                                                                            |
| **views**/**mixins**/_postForm.pug         | Contains the reusable form for creating a Post.                                                             |
| **views**/**partials**/footer.pug          | Footer partial template.                                                                                    |
| **views**/**partials**/navbar.pug          | Navbar partial template.                                                                                    |
| **views**/404.pug                          | Not found template.                                                                                         |
| **views**/500.pug                          | Internal Server template.                                                                                   |
| **views**/contact.pug                      | Contact form template.                                                                                      |
| **views**/create.pug                       | Create/Edit a Post template.                                                                                |
| **views**/home.pug                         | Home page template.                                                                                         |
| **views**/layout.pug                       | Base template.                                                                                              |
| **views**/login.pug                        | Login template.                                                                                             |
| **views**/posts.pug                        | Post page template that show all posts created and edited by the authenticated user.                        |
| **views**/register.pug                     | Register a user template.                                                                                   |
| .dockerignore                              | Folder and files ignored by docker usage.                                                                   |
| .eslintignore                              | Folder and files ignored by Eslint.                                                                         |
| .eslintrc                                  | Rules for eslint linter.                                                                                    |
| .gitignore                                 | Folder and files ignored by git.                                                                            |
| .prettierignore                            | Folder and files ignored by Prettier.                                                                       |
| .prettierrc                                | Rules for Prettier formatter.                                                                               |
| .travis.yml                                | Configuration files for continuous integration by Travis CI.                                                |
| cloudrun.Dockerfile                        | Docker configuration for **google container registry** and **google cloud run**.                            |
| copy-files.ts                              | Build script that copies **public** and **views** folders to the app folder for production.                 |
| app.js                                     | The main application file.                                                                                  |
| docker-compose.yml                         | Docker compose configuration file for Node.js and MongoDB                                                   |
| Dockerfile                                 | Docker configuration file.                                                                                  |
| ecosystem.config.js                        | A pm2 configuration file for production.                                                                    |
| .env.variable.env                          | Your API keys, tokens, passwords and database URI.                                                          |
| jest.config.js                             | Used to configure Jest running tests written in TypeScript                                                  |
| package.json                               | NPM dependencies.                                                                                           |
| package-lock.json                          | Contains exact versions of NPM dependencies in package.json.                                                |
| tsconfig-prod.json                         | Config settings for compiling server code written in TypeScript for production.                             |
| tsconfig.json                              | Config settings for compiling server code written in TypeScript for development.                            |
| webpack.config.js                          | Configuration files for Webpack build.                                                                      |

**Note:** There is no preference how you name or structure your views.
You could place all your templates in a top-level `views` directory without
having a nested folder structure, if that makes things easier for you.
Just don't forget to update `extends ../layout`  and corresponding
`res.render()` paths in controllers.

## List of Packages

-----------------

`Dependencies are managed through package.json`. In that file you'll find two sections:

### `dependencies`

| Package                       | Description                                                                                                 |
|-------------------------------|-------------------------------------------------------------------------------------------------------------|
| body-parser                   | Express 4 middleware.                                                                                       |
| compression                   | Express 4 middleware.                                                                                       |
| connect-ensure-login          | Ensures that a user is logged in and redirect to previous URL after login.                                  |
| connect-flash                 | Express 4 Middleware.                                                                                       |
| connect-mongo                 | MongoDB session store for Express.                                                                          |
| cors                          | Express 4 Middleware                                                                                        |
| dotenv                        | Loads environment variables from variable.env file.                                                         |
| errorhandler                  | Express 4 middleware.                                                                                       |
| express                       | Node.js web framework.                                                                                      |
| express-flash                 | Provides flash messages for Express.                                                                        |
| express-recaptcha             | Express 4 middleware for Google-reCAPTCHA                                                                   |
| express-session               | Express 4 middleware.                                                                                       |
| express-status-monitor        | Report realtime server metrics for Express-based node servers.                                              |
| express-validator             | Easy form validation for Express.                                                                           |
| helmet                        | Secures your Express apps by setting various HTTP headers middleware                                        |
| md5                           | A JavaScript function for hashing messages with MD5.                                                        |
| mongoose                      | MongoDB ODM.                                                                                                |
| mongoose-mongodb-errors       | A plugin to transform mongodb like errors                                                                   |
| morgan                        | Express 4 middleware for logging.                                                                           |
| nodemailer                    | Node.js library for sending emails.                                                                         |
| nodemailer-sendgrid-transport | This module is a transport plugin for Nodemailer that makes it possible to send through SendGrid's Web API! |
| passport                      | Simple and elegant authentication library for node.js                                                       |
| passport-discord              | Sign-in with Discord plugin.                                                                                |
| passport-dropbox-oauth2       | Sign-in with Dropbox plugin.                                                                                |
| passport-facebook             | Sign-in with Facebook plugin.                                                                               |
| passport-github               | Sign-in with Github plugin.                                                                                 |
| passport-google-oauth         | Sign-in with Google plugin.                                                                                 |
| passport-linkedin-oauth2      | Sign-in with LinkedIn plugin.                                                                               |
| passport-local                | Sign-in with Username and Password plugin.                                                                  |
| passport-local-mongoose       | A Mongoose plugin that simplifies building username and password login with Passport.                       |
| passport-slack                | Sign-in with Slack plugin.                                                                                  |
| passport-twitter              | Sign-in with Twitter plugin.                                                                                |
| pug (jade)                    | Template engine for Express.                                                                                |
| shelljs                       | Unix shell commands on top of the Node.js API                                                               |
| validator                     | A library of string validators and sanitizers.

### `devDependencies`

| Package                               | Description                                                                                                                                  |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| @babel/core                           | Babel compiler core.                                                                                                                         |
| @babel/preset-env                     | A Babel preset for each environment.                                                                                                         |
| @types                                | Dependencies in this folder are `.d.ts` files used to provide types                                                                          |
| @typescript-eslint/eslint-plugin      | TypeScript plugin for ESLint                                                                                                                 |
| @typescript-eslint/parser             | An ESLint custom parser which leverages TypeScript ESTree                                                                                    |
| autoprefixer                          | Parse CSS and add vendor prefixes to CSS rules using values from the **Can I Use** website                                                   |
| babel-core                            | Babel compiler core.                                                                                                                         |
| babel-loader                          | Babel module loader for webpack                                                                                                              |
| babel-plugin-transform-util-promisify | Transforms util.promisify to a function definition for node versions < 8, automatically detects if node version >= 8 and does nothing if so. |
| babel-preset-env                      | A Babel preset for each environment.                                                                                                         |
| concurrently                          | Utility that manages multiple concurrent tasks. Used with npm scripts                                                                        |
| css-loader                            | Css loader module for webpack                                                                                                                |
| eslint                                | An AST-based pattern checker for JavaScript.                                                                                                 |
| eslint-config-airbnb                  | Airbnb's ESLint config, following our styleguide                                                                                             |
| eslint-config-prettier                | Turns off all rules that are unnecessary or might conflict with Prettier.                                                                    |
| eslint-import-resolver-alias          | A simple Node behavior import resolution plugin for eslint-plugin-import, supporting module alias.                                           |
| eslint-plugin-import                  | Eslint import with sanity.                                                                                                                   |
| eslint-plugin-jsx-a11y                | Static AST checker for accessibility rules on JSX elements.                                                                                  |
| eslint-plugin-prettier                | Runs prettier as an eslint rule                                                                                                              |
| eslint-plugin-react                   | React specific linting rules for ESLint                                                                                                      |
| extract-text-webpack-plugin           | Extracts text from a bundle into a separate file                                                                                             |
| jest                                  | Testing library for JavaScript.                                                                                                              |
| nodemon                               | Utility that automatically restarts node process when it crashes                                                                             |
| pm2                                   | Production process manager for Node.JS applications with a built-in load balancer.                                                           |
| postcss-loader                        | PostCSS loader for webpack                                                                                                                   |
| prettier                              | An opinionated code formatter                                                                                                                |
| supertest                             | HTTP assertion library.                                                                                                                      |
| ts-jest                               | A preprocessor with sourcemap support to help use TypeScript with Jest.                                                                      |
| ts-node                               | Enables directly running TS files. Used to run `copy-files.ts`                                                                       |
| typescript                            | JavaScript compiler/type checker that boosts JavaScript productivity                                                                         |
| webpack                               | A module bundler                                                                                                                             |

## Useful Tools and Resources

-----------------

- [DefinitelyTyped](http://definitelytyped.org/) - The repository for high quality TypeScript type definitions.
- [Learn Node](https://learnnode.com/) - A premium training course to learn to build apps with Node.js, Express, MongoDB, and friends.
- [HTML to Pug converter](https://html2pug.now.sh/) - HTML to PUG is a free online converter to help you convert a HTML snippet to a Pug snippet.
- [PWA Builder](https://www.pwabuilder.com/) - Quickly and easily turn your website into an app!

## Recommended Design Resources

-----------------

- [Bootstrapious](https://bootstrapious.com/blog) - Learn how to build nice and responsive components in Bootstrap.
- [Bootsnipp](http://bootsnipp.com/) - Code snippets for Bootstrap.
- [Google Bootstrap](http://todc.github.io/todc-bootstrap/) - Google-styled theme for Bootstrap.
- [Font Awesome Icons](https://fontawesome.com/) - It's already part of the Hackathon Starter, so use this page as a reference.
- [Unsplash](https://unsplash.com/) - Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.
- [Colors](http://clrs.cc) - A nicer color palette for the web.
- [Creative Button Styles](http://tympanus.net/Development/CreativeButtons/) - awesome button styles.

## Recommended Node.js Libraries

-----------------

One of the best Open source Contributors know I know [Sindre Sorhus](https://sindresorhus.com) has put together an awesome list of Node.js libraries and resources. [Click here](https://github.com/sindresorhus/awesome-nodejs)

## Cheatsheets

-----------------

### Typescript

- [DevDocs](https://devdocs.io/typescript/) - Fast, offline, and free documentation browser for developers. Search 100+ docs in one web app: HTML, CSS, JavaScript, PHP, Ruby, Python, Go, Typescript.

- [Devhint](https://devhints.io/typescript) - The one-page guide to TypeScript: usage, examples, links, snippets, and more.

- [SaltyCrane Blog](https://www.saltycrane.com/typescript-cheat-sheet/latest/) - Typescript cheat sheet blog referencing from the Official Microsoft Typescript repository.

### Mongoose

- [DevDocs](https://devdocs.io/mongoose) - Fast, offline, and free documentation browser for developers. Search 100+ docs in one web app: HTML, CSS, JavaScript, PHP, Ruby, Python, Go, Typescript.

## Docker

-----------------

You will need docker and docker-compose installed to build the application.

- [Docker installation](https://docs.docker.com/engine/installation/)

- [Common problems setting up docker](https://docs.docker.com/toolbox/faqs/troubleshoot/)

After installing docker, start the application with the following commands :

### Running hackathon-starter kit in Development

```bash
# Go to the variable.env file and change  your DEV_MONGODB string to DEV_MONGODB=mongodb://app:password@mongodb/hackathon
# if you have experience with docker and docker-compose, you can edit your credentials  in the docker-compose.yml file.

# To build  and start the project for the first time or when you add dependencies
docker-compose -f "docker-compose.yml" up -d --build
```

### Running hackathon-starter kit in Production

```bash
# Ensure that your a Live MongoDB URL inside your variable.ev [PROD_MONGODB]

# PROD_MONGODB=mongodb://<username>:<password>@<hostname>/<database name>

# Build the project
npm run docker:build

# Build the Docker image
docker build --rm -f "prod.Dockerfile" -t typescript-node-kit:latest .

# Run the project
docker run -d -it --name hackathon -p 8080:8080 [name of the image or ID of the image]
