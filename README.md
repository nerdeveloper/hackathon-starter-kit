
# Hackathon Starter Kit(Node-Typescript/Express)

[![Build Status](https://travis-ci.org/nerdeveloper/hackathon-starter-kit.svg?branch=master)](https://travis-ci.org/nerdeveloper/hackathon-starter-kit)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/nerdeveloper/hackathon-starter-kit/master)
![David](https://img.shields.io/david/dev/nerdeveloper/hackathon-starter-kit)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f303b2b47c5a448aa168b94e6f259c88)](https://www.codacy.com/manual/nerdeveloper/hackathon-starter-kit?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=nerdeveloper/hackathon-starter-kit&amp;utm_campaign=Badge_Grade)
![GitHub](https://img.shields.io/github/license/nerdeveloper/hackathon-starter-kit)

A Node-Typescript/Express Boilerplate with Authentication(Local, Github, Facebook, Twitter, Google, LinkedIn, Dropbox, Slack, Discord), Authorization, and CRUD functionality + PWA Support!

![hackathon-starter-kit](public/snap/image.png)

**Live Demo:** <https://hackathon-slhbx5lcqq-uc.a.run.app>

Jump to [What's new?](https://github.com/nerdeveloper/hackathon-starter-kit/blob/master/CHANGELOG.md)

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
- [Credits](#credits)
- [Inspiration](#inspiration)
- [Changelog](#changelog)
- [Code of Conduct](#code-of-conduct)
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
- Webpack
- Css stylesheets
- Bootstrap 4
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
- [Node.js 10.0+](http://nodejs.org)
- [Visual Studio Code](https://code.visualstudio.com/download) *optional*

## Getting Started

-----------------

There are two ways to set this project up:

- Setting up manually
- Setting up using [Docker](#docker)

### Setting up manually

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

# start ngrok to intercept the data exchanged on port 3000
ngrok http 3000
```

Next, you must use the https URL defined by ngrok inside your [config file](src/config.ts) under **site**, for example, `https://<subdomain>.ngrok.io`

**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon).
It watches for any changes in your  node.js app and automatically restarts the
server. Once installed, instead of `node app.js` use `NODE_ENV=development nodemon dist/server.js --public`. It will
save you a lot of time in the long run, because you won't need to manually
restart the server each time you make a small change in code. To install, run
`npm install -g nodemon` or `sudo npm i -g nodemon`

### Monitoring

This project offers Real time monitoring only suitable for development purposes.

```bash

# Ensure the project is up and running [npm start]
# Open  http://localhost:3000/status in your broswer.
```

## Obtaining API Keys

-----------------

To use any of the included APIs or OAuth authentication methods, you will need
to obtain appropriate credentials: Client ID, Client Secret, API Key, or
Username & Password. You will need to go through each provider to generate new
credentials.

<img src="https://www.google.com/recaptcha/intro/assets/google_logo_160x56_2x.png" width="200"> reCAPTCHA

- Go to <a href="https://www.google.com/recaptcha/admin" target="_blank">Admin Console</a>
- Select **+** from the navbar to add a site.
- Enter a your Site Name in the Label field.
- Select your **reCAPTCHA type**
  - Select **reCAPTCHA v2**
  - Select **"I'm not a robot" Checkbox**
- Enter your domain(s) in the Domain field. e.g `localhost`
- Accept the reCAPTCHA Terms of Service.
- Submit the form
- Now copy and paste *Client Site Key* into `login.pug`, `register.pug` and `contact.pug` under the attribute `data-sitekey`.

-----------------

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
| **__tests__**                                  | Contains your tests. Separate from source because there is a different build process.                       |
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
| copy-files.ts                              | Build script that copies **public** and **views** folders to the app folder for production.                 |
| app.js                                     | The main application file.                                                                                  |
| docker-compose.yml                         | Docker compose configuration file for Node.js and MongoDB                                                   |
| Dockerfile                                 | Docker configuration file.                                                                                  |
| ecosystem.config.js                        | A pm2 configuration file for production.                                                                    |
| .env.variable.env                          | Your API keys, tokens, passwords and database URI.                                                          |
| jest.config.js                             | Used to configure Jest running tests written in TypeScript                                                  |
| package.json                               | NPM dependencies.                                                                                           |
| package-lock.json                          | Contains exact versions of NPM dependencies in package.json.                                                |
| prod.Dockerfile                            | Docker configuration for running app in a production env.                                                    |
| tsconfig-prod.json                         | Config settings for compiling server code written in TypeScript for production.                             |
| tsconfig.json                              | Config settings for compiling server code written in TypeScript for development.                            |
| webpack.config.js                          | Configuration files for Webpack build.                                                                      |

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

:top: <sub>[**back to top**](#table-of-contents)</sub>

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
- [Icon Finder](https://www.iconfinder.com) - A leading search engine and market place for vector icons in SVG, PNG, CSH and AI format.

## Recommended Node.js Libraries

-----------------

One of the best Open source Contributors [Sindre Sorhus](https://sindresorhus.com) has put together an awesome list of Node.js libraries and resources. [Click here](https://github.com/sindresorhus/awesome-nodejs)

## Cheatsheets

-----------------

### Typescript

- [DevDocs](https://devdocs.io/typescript/) - Fast, offline, and free documentation browser for developers. Search 100+ docs in one web app: HTML, CSS, JavaScript, PHP, Ruby, Python, Go, Typescript.

- [Devhint](https://devhints.io/typescript) - The one-page guide to TypeScript: usage, examples, links, snippets, and more.

- [SaltyCrane Blog](https://www.saltycrane.com/typescript-cheat-sheet/latest/) - Typescript cheat sheet blog referencing from the Official Microsoft Typescript repository.

### Mongoose

- [DevDocs](https://devdocs.io/mongoose) - Fast, offline, and free documentation browser for developers. Search 100+ docs in one web app: HTML, CSS, JavaScript, PHP, Ruby, Python, Go, Typescript.

## Deployment

-----------------

 Once you are ready to deploy your app, you will need to create an account with a cloud platform to host it. These are not the only choices, You can use *Digital Ocean*, *Azure Virtual Machines*, *Google Cloud Compute Engine*  Additionally, you can create an account with MongoDB Atlas and then pick one of the 4 providers below. Again, there are plenty of other choices, and you are not limited to just the ones listed below.

### Hosted MongoDB Atlas

-----------------

 <img src="https://www.mongodb.com/assets/images/global/MongoDB_Logo_Dark.svg" width="200">

- Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Click the green **Get started free** button
- Fill in your information then hit **Get started free**
- You will be redirected to Create New Cluster page.
- Select a **Cloud Provider and Region** (such as AWS and a free tier region)
- Select cluster Tier to **Free Shared Clusters**
- Give Cluster a name (default: Cluster0)
- Click on green **:zap:Create Cluster button**
- Now, to access your database you need to create a DB user. To create a new MongoDB user, from the **Clusters view**, select the **Security tab**
- Under the **MongoDB Users** tab, click on **+Add New User**
- Fill in a username and password and give it either **Atlas Admin** User Privilege
- Next, you will need to create an IP address whitelist and obtain the connection URI.  In the Clusters view, under the cluster details (i.e. SANDBOX - Cluster0), click on the **CONNECT** button.
- Under section **(1) Check the IP Whitelist**, click on **ALLOW ACCESS FROM ANYWHERE**. The form will add a field with `0.0.0.0/0`.  Click **SAVE** to save the `0.0.0.0/0` whitelist.
- Under section **(2) Choose a connection method**, click on **Connect Your Application**
- In the new screen, select **Node.js** as Driver and version **2.2.12 or later**. _*WARNING*_: Do not pick 3.0 or later since connect-mongo can't handle mongodb+srv:// connection strings.
- Finally, copy the URI connection string and replace the URI in **PROD_MONGODB** of `variable.env` with this URI string.  Make sure to replace the **PASSWORD** with the db User password that you created under the Security tab.
- Note that after some of the steps in the Atlas UI, you may see a banner stating `We are deploying your changes`.  You will need to wait for the deployment to finish before using the DB in your application.

**Note:** As an alternative to MongoDB Atlas, there is also [Compose](https://www.compose.io/).

### PM2

-----------------

A Complete feature set for production environment, built with a worldwide community of developers and enterprises. It can be used on Infrastructure-as-a-Service (IaaS) providers like *Digital Ocean Droplets*

```bash
# You need to know PM2 run in production mode and will run a bunch of Node.js Clusters.
# This will help to ensure high availability(HA) and Load Balancing.

npm run pm2
```

If you want to setup a CI/CD for your production application for any Infrastructure-as-a-Service (IaaS) Cloud provider, [Click here.](http://pm2.keymetrics.io/docs/usage/deployment/)

### Google Cloud Run(Serverless Containers)

-----------------

<img src="https://miro.medium.com/max/512/1*I0iAulfQwG-rV-xrAKEtqQ.png" width="200">

I believe Serverless Containers are the future of deploying Containerized applications. The Hackathon starter kit Demo site runs on *Google Cloud Run*. I also highly recommend this approach.

- [Download and install Node.js](https://nodejs.org/)
- [Select or create](https://console.cloud.google.com/project) a Google Cloud Platform Console project
- [Enable billing](https://support.google.com/cloud/answer/6293499#enable-billing) for your project (there's a $300 free trial)

```bash

# Ensure that you have a Live MongoDB URL inside your variable.env [PROD_MONGODB]

# PROD_MONGODB=mongodb://<username>:<password>@<hostname>/<database name>

# Build the project for a production environment.
npm run docker:build

# Build a Docker image
docker build --rm -f "prod.Dockerfile" -t hackathon-starter-kit:latest .

# Tag the image to a Google Cloud Container Registry URL
docker tag hackathon-starter-kit us.gcr.io/[PROJECT ID]/hackathon-starter-kit

# Push the newly tagged image to the Google Cloud Container Registry.
docker push us.gcr.io/[PROJECT_ID]/hackathon-starter-kit

```

- Sign in your Google Cloud console
- Select **Container Registry**
- You will see latest version of the pushed image. See the image below:
![google-cloud-run](public/snap/image_1.png)
- Select **Deploy to Cloud Run**
- You will be redirected to the google cloud run page.
- Fill in the required fields. *Look at the image below for a preview*
![google-cloud-run](public/snap/image_2.png)
- Click on **CREATE** button below your fields.
- Congratulations! Your app now runs on Serverless 🎊🎊🎊.

## Docker

-----------------

You will need docker and docker-compose installed to build the application.

- [Docker installation](https://docs.docker.com/engine/installation/)

- [Common problems setting up docker](https://docs.docker.com/toolbox/faqs/troubleshoot/)

After installing docker, start the application with the following commands :

### Running hackathon-starter kit in Development

```bash
# Get the latest snapshot
git clone https://github.com/nerdeveloper/hackathon-starter-kit.git

# Change directory
cd hackathon-starter-kit

# Copy .env.example to .env
cp .env.variable.env variable.env

# Go to the variable.env file and change  your DEV_MONGODB value to mongodb://app:password@mongodb/hackathon
# if you have experience with docker and docker-compose, you can edit your credentials  in the docker-compose.yml file.

# To build  and start the project for the first time.
docker-compose -f "docker-compose.yml" up -d --build

# Run the project
docker run -d -it --name hackathon -p 3000:3000 [name of the image or ID of the image]
```

### Running hackathon-starter kit in Production

```bash

# Get the latest snapshot
git clone https://github.com/nerdeveloper/hackathon-starter-kit.git

# Change directory
cd hackathon-starter-kit

# Copy .env.example to .env
cp .env.variable.env variable.env

# Ensure that you have a Live MongoDB URL inside your variable.env [PROD_MONGODB]

# PROD_MONGODB=mongodb://<username>:<password>@<hostname>/<database name>

# Build the project
npm run docker:build

# Build the Docker image
docker build --rm -f "prod.Dockerfile" -t typescript-node-kit:latest .

# Run the project
docker run -d -it --name hackathon -p 8080:8080 [name of the image or ID of the image]
```

## Production

-----------------

### Search Engine Optimization (SEO)

Note that SEO only applies to the pages that will be publicly visible with no authentication.  Note that some of the following fields need to be added to the HTML header section similar to the page [title](https://github.com/nerdeveloper/hackathon-starter-kit/blob/master/views/layout.pug#L6)

- Add Open Graph fields for SEO
  Open Graph data:

```html
  <meta property="og:title" content="Title">
  <meta property="og:type" content="website">
  <meta property="og:url" content="http://www.example.com/article.html">
  <meta property="og:image" content="http://www.example.com/image.png">
  ```

- Add a page title, description, keywords which will show up in the search results of the search engine.

```html
   <meta name="title" content="Title of the page">
   <meta name="Description" content="Description about the page.">
   <meta name="keywords" content=" Keywords used for the page Search indexing">
```

## Credits

- [Sahat Yalkabov](https://github.com/sahat/hackathon-starter) - JavaScript
- [Prosper Otemuyiwa](https://github.com/unicodeveloper/laravel-hackathon-starter) - PHP
- [Microsoft](https://github.com/microsoft/TypeScript-Node-Starter) - Typescript

## Make me feel :heart: and appreciated

You can :star: the repo | Tell your friends about it | Fork it and submit Pull Requests.

You can also follow me on **[Twitter](https://twitter.com/odirionyeo)**

## Inspiration

My inspiration for building this is the [ecommerce-netlify](https://github.com/sdras/ecommerce-netlify) by [Sarah Drasner](https://twitter.com/sarah_edo)

## Changelog

-----------------

You can find the changelog for the project in: [CHANGELOG.md](https://github.com/nerdeveloper/hackathon-starter-kit/blob/master/CHANGELOG.md)

## Code of Conduct

-----------------

You can find the Code of Conduct for the project in: [CODE_OF_CONDUCT.md](https://github.com/nerdeveloper/hackathon-starter-kit/blob/master/CODE_OF_CONDUCT.md)

## Contributing

-----------------

You can find how you can contribute to the project in: [CONTRIBUTING.md](https://github.com/nerdeveloper/hackathon-starter-kit/blob/master/CONTRIBUTING.md)

## License

You can find how you can contribute to the project in: [LICENSE](https://github.com/nerdeveloper/hackathon-starter-kit/blob/master/LICENSE)
