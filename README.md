# The Technology Blog ![MIT License](https://camo.githubusercontent.com/302a0a2a90397c2fc68f3838a6c9b9cebec684d041d250065a05bebab1412cd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d726564)

## Description

The Technology Blog is a simple blogging platform that allows users to post technology related blogposts. As a added bonus registered users can post their comments and ideas against an article.

Deployed URL: [The Technology Blog](https://fast-anchorage-91606.herokuapp.com/)

## Key features

- View existing blogposts and comments
- New users sign up (_Comming Soon_)
- Dashboard that allows users to:
  - View existing blogposts and comments for an article
  - Post new articles, requires the user to be registered
  - Post new comments and ideas, requires the user to be registered
  - Update and edit blog articles, these are posted by the registered user.

## Technology stack

- `Express` and `Express-Handlebars`
- `node.js`
- `Sequelize`
- `MySQL2`
- Several other `npm` packages, see `package.json` for details.

## Installation

- Not required.
- If you wish to clone or fork the repo, you will need to:
  - Run `npm install`. This will install the necessary npm packages locally
  - Enter `node server.js` from the command prompt, to start the server.
  - Seeding test data: run the command `node seeds/seed.js`

## Usage Instructions

### View All blog posts (_anonymously_)

1. Go to: https://fast-anchorage-91606.herokuapp.com/
2. Select Home.

### Screenshot

### View comments for a blog post (_anonymously_)
1. Go to: https://fast-anchorage-91606.herokuapp.com/
2. Select a blog post link.

### Screenshot

### Login to Dashboard
1. Go to: https://fast-anchorage-91606.herokuapp.com/dashboard
2. Select Dashboard.

### Screenshot


### Add a new comment, to your blogpost
1. Go to: https://fast-anchorage-91606.herokuapp.com/dashboard
2. Select Dashboard.
3. Select the blog post link.
4. Enter your comment and press Submit.

### Screenshot

### Add new blogpost
1. Go to: https://fast-anchorage-91606.herokuapp.com/dashboard
2. Select Dashboar
3. Select New Post button
4. Enter the Title and Content in the pop-up window.
5. Select Save.

### Screenshot


### Edit or Delete a blogpost
1. Go to: https://fast-anchorage-91606.herokuapp.com/dashboard
2. Select Dashboard
3. Select the required blog post link
4. To edit, select the Edit icon.
5. To delete, select the Delete icon.

### Screenshot







