
# Hackathon Starter Kit(Node-Typescript/Express)

A Node-Typescript/Express Boilerplate with Authentication(Local, Github, Facebook, Twitter, Google, LinkedIn, Dropbox, Slack, Discord), Authorization, and CRUD functionality + PWA Support!

![hackathon-starter-kit](public/snap/image.png)

**Live Demo:** https://hackathon-slhbx5lcqq-uc.a.run.app

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
- [Recommended Client-side Libraries](#recommended-client-side-libraries)
- [Pro Tips](#pro-tips)
- [FAQ](#faq)
- [How It Works](#how-it-works-mini-guides)
- [Cheatsheets](#cheatsheets)
    - [ES6](#-es6-cheatsheet)
    - [JavaScript Date](#-javascript-date-cheatsheet)
    - [Mongoose Cheatsheet](#mongoose-cheatsheet)
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
- Webpack
- Css stylesheets
- Bootstrap 4 + Extra Themes
- Contact Form (powered by Sendgrid)
- PWA Support
- Google reCAPTCHA
- HSTS, noSniff, Cross site scripting (XSS) protection and more.
- **Account Management**
  - Gravatar
  - Link multiple OAuth strategies to one account
  - Create a Post
  - Get a Post
  - Edit/Update a Post
  - Delete a Post
  - CSRF protection
- **API Examples**: Facebook, Google, Dropbox, Twitter, LinkedIn.

## Prerequisites

-----------------

- [MongoDB](https://www.mongodb.com/download-center/community)
- [Node.js 8.0+](http://nodejs.org)

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
- **Note:** *App ID* is **FACEBOOK_ID**, *App Secret* is **FACEBOOK_SECRET** in `.env`
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
- Now copy and paste *Client ID* and *Client Secret* keys into `.env` file

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

<

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
