# Goal

To display HackerNews info as list.

## Instructions and Requirements

Mandatory Requirement for UI

1. Before finish fetching data, please showing loading icon or animation.
2. To display list of hacker news top stories(100news)
3. Each hacker news has link to navigate actual page as new tab.
4. (Bonus) - Infinite scrolling or pagenation
5. (Bonus) - Performance improvement
6. (Optional) - Fancy UI, Caching

Mandatory

1. Use react(preact, next.js is also ok).
2. Use typescript.
3. NOT use UI library(e.g material design, bootstrap).
   But to use css framewotk(e.g styled-component, css-in-module are ok).

API Spec

- Whole spec [https://github.com/HackerNews/API](https://github.com/HackerNews/API)
- top stories api [https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty](https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty)
- fetch individual story

  - [https://hacker-news.firebaseio.com/v0/item/{itemId}.json?print=pretty](https://hacker-news.firebaseio.com/v0/item/{itemId}.json?print=pretty)
  - [https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty](https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty)

  Note

- You don't need to spend a lot of time building it up.

## Getting Start

After cloning this repository, follow the steps below to run the application.

1. Run `npm install` to install the dependencies.
2. Run `npm start` to start the application locally.
3. Go to [localhost:3000](http://localhost:3000/) to access the web application.

## Dependencies

This application uses the follow packages:

- [Styled components](https://styled-components.com/)
- [Axios](https://axios-http.com/docs/intro)
- [React Query](https://tanstack.com/query/v4/docs/installation)

## Live Demo

It's possible to access a live demo example on:
[live demo](https://hn-top-stories-list.surge.sh/)
