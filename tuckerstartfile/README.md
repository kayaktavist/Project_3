# Reactify!
Welcome to Reactify! The purpose of this project is to help students understand how a full MERN Stack application comes together!

## Overview
Reactify is a simple MERN Stack application that allows an authenticated user to post articles and an unauthenticated user to view them!

## Frontend
Since this is a MERN application we will be using React on the front end. As well as other useful libraries that compliment React

### Frontend Libraries
- [Create React App](https://github.com/facebook/create-react-app) - CLI tools that will structure our react application for us
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React Router](https://github.com/ReactTraining/react-router) - a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
- [React-Redux](https://redux.js.org/basics/usage-with-react) - A react library that allows us to tie into our Redux store easily

### Frontend Structure
```
├── README.md
├── package.json
├── public
├── src
    ├── App.js
    ├── components
    │   ├── common
    │   └── pages
    ├── index.js
    ├── state
    │   ├── auth
    │   ├── count
    │   ├── index.js
    │   └── modal
    │       ├── actions.js
    │       └── reducer.js
    ├── styles
    │   └── sass
    │       └── index.scss
    └── utils
        ├── API.js
        └── AuthRoute.js
```
#### `src/`
In an application built with Create React App our application will start in the `src/` directory

Inside of `src/` you will find a `index.js`, this file is our entry point into the react application. The whole purpose of this file is to let React know what Component we should render to the screen.

The main component of our application is `<App/>` the code for this component will reside inside of `App.js`.

`App.js` is where we will import and configure React-Redux and React-Router.

#### `components/`
To keep our directories clean any other component that we build will be stored inside of `components/`. The child directories inside of `components/` are totally up to you, I personally like to create a `common/` directory and store any components that will be common in my application. So anything like a Footer or a Navbar will go inside of there. Along side the `common/` directory I normally create a `pages/` directory, inside of `pages/` is where I will store any of the page views that I will need.

#### `state/`
`state/` is where we will store all of our files concerning Redux

Many tutorials you read online will have you create a `reducer/` and `actions/` directory. That will work just fine with small applications, but as your application grows that file structure will become very inconvenient.

The idea behind this `state/` directory is that whatever child directories I have inside of it, will directly represent the state structure that I have inside of my Redux store. 

For example, in the tree above I have 
```    
   ├── state
   │   ├── auth
   │   ├── count
   │   ├── index.js
   │   └── modal
   │       ├── actions.js
   │       └── reducer.js
```

With this structure I will expect my redux store to look like this
```
{
  auth: ...,
  count: ...,
  modal: ...
}
```

#### `styles/`
`styles/` is used to store any and all styles I want to apply to my application. Whether it is Sass, CSS, or Less. Those files will reside here. If you find yourself interested in CSS Modules come talk to me and we can discuss how you might want to change this structure!

#### `utils/`
`utils/` purpose is for any utilty functions or components!

## Backend
The backend of this application will be utilizing Mongo and Express, as well as various other middleware and utility packages

### Backend Libraries
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - A password hashing function
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into process.env.
- [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
- [jwt-simple](https://www.npmjs.com/package/jwt-simple) - JWT(JSON Web Token) encode and decode module for node.js.
- [mongoose](https://www.npmjs.com/package/mongoose) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js
- [passport](https://www.npmjs.com/package/passport) - Passport is Express-compatible authentication middleware for Node.js.

## Notes

Seperate client and server to make the code more readable for future students
