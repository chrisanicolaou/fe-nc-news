# Welcome to my frontend project!

## A [deployed](https://glittery-crumble-9fe6a8.netlify.app/) React app that mimics the functionality of Reddit

---

---

## Table of contents

1. [Overview](#overview)
2. [Setup](#setup)
3. [Limitations](#limitations)

---

---

## Overview

As a part of my studies at Northcoders, I was tasked with building a front end app for my [previously created backend](https://github.com/chrisanicolaou/NC-backend-project). The intention is to mimic the functionality of forum sites like Reddit, while gaining practical knowledge for building a front end using React.

**This app has been deployed to [Netlify](https://www.netlify.com/), and can be viewed online [here](https://glittery-crumble-9fe6a8.netlify.app/). Alternatively, if you would like to run the app locally, please follow the [setup](#setup) instructions.**

---

---

## Setup

**Prerequisite**: [Node](https://nodejs.org/en/) (version 16 or above)

First, clone the repo and head into the root directory:

`git clone https://github.com/chrisanicolaou/fe-nc-news.git`

`cd fe-nc-news`

Now install the project's dependencies:

`npm install`

The app can now be run locally:

`npm start`

---

---

## Limitations

This app was my first solo React project on the course. This, coupled with the time limitations (I had 1 week to complete the project), forced me to focus on an MVP; given more time, I would have liked to further explore some of the tech I had decided to use.

[**Tailwind**](https://tailwindcss.com/): While it was not mandatory to use a CSS framework, I had been experimenting with Tailwind in my spare time and wanted to use it for this project. I was charmed by Tailwind's easy-to-use utility classes and extensive docs. As is evident by the app, the styling is very basic - with a little more time I would have loved to use more of what Tailwind has to offer.

[**Additional React Hooks**](https://reactjs.org/docs/hooks-reference.html): My experiences with React up to this point had been limited to the useState & useEffect hooks. I would have liked to have implemented features that required different hooks; namely, useContext is one with widespread applications and definitely could have been useful here.

**Login/Signup functionality**: At the moment, the app has a hardcoded 'user'. This was done to allow me to build the app in the timeframe allocated, without worrying about all the implications of different signed in users. This would have been nice to implement here, and would also have given me more opportunity to experiment with the useContext hook as previously mentioned.

**Pagination**: The app currently does not implement any form of pagination. While the data set is small, this would be an important consideration on any successful forum app - or any app that works with large data sets.
