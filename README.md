# Github Search

A [**React**](https://reactjs.org) app designed with [Styled-Components](https://styled-components.com/) that could：

- list user's/organization's all repositories with Infinite Scroll from [**GitHub REST API**](https://docs.github.com/en/rest)
- read repository's detail from [**GitHub REST API**](https://docs.github.com/en/rest)

## How To Use

### On GitHub Page

This React app had deployed on GitHub page: [DEMO](https://boycany.github.io/github-search/)

### On Your Computer

1. Your computer should have downloaded [Node.js](https://nodejs.org/en) before（Node >= 14.0.0 and npm >= 5.6）

2. Download this repository via git clone

```shell
git clone https://github.com/boycany/github-search.git
```

3. Change directories to this repository via cd

```shell
cd github-search
```

4. Run this React app

```shell
npm install
npm start
```

npm start will automatically open [**http://localhost:3000**](http://localhost:3000) on your computer.

## Architecture Design & Explanation

### [App.js]: for direct route

- [Search]: route at `/`
- [List]: route at /users/:username/repos
- [RepoDetail]: route at /users/:username/repos/:repo
- [ErrorPage]: route at `*` for preventing user direct to the route that doesn't exist.

### [Search.js]

- A search bar for user to input GitHub username
- Store data that fetch from API in sessionStorage

### [List.js]

- For display search result: user's/organization's all repositories
- Render with data we saved in sessionStorage
- Use useEffect to check if user type another username on url, then fetch data with `req.params.username`. Results will always match with route.
- State `isFetching`: for triggering Loading animation

### [useInfiniteScroll.js]

- Custom hook for infinite scroll logic
- Return [isFetching, setIsFetching]

### [RepoDetail.js]

- For display repository details
- Use useEffect to check if user type another username or another repository name on url: fetch data with req.params.username or `req.params.repos`. Results will always match with route.

### [styles] Folder

- Use Style-Components for css styling

## Version

- styled-components `5.3.5`
- react-router-dom `6.3.0`
- react `18.2.0`
- axios `0.27.2`
