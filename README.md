# Address Book App

## Using the repository

### Development

Clone the repository:

```
git clone https://github.com/diegopso/reactjs-address-book.git
cd reactjs-address-book
```

Install and execute using NPM (tested with Node v14):

```
npm install
npm start
```

> Access at https://localhost:3000

Or use Docker instead:

```
docker-compose up --build app
```

> Access at https://localhost:3001

### Tests

After instalation:

```
npm run test
```

Or:

```
docker-compose up --build test
```

### Build

After instalation:

```
npm run build
```

Or:

```
docker-composer up --build app-prod
```

> Access at https://localhost:8000

## Folder Structure

The core of the app resides into the `src/` folder. The subdirecotires are:

- `adapters`: Modules responsible for storing/loading data from different datasources.
- `assets`: Contain `images` and `styles`. Style files are divided into `base` with general rules for all application and `components` with component speciffic styles. So far no `pages` style was used.
- `components`: Component modules to compose oder components or pages.
- `pages`: Page modules of the app.
- `store`: State and side effect management files. Every context containg: `actions.js` with the Actions to be dispatched; `reducers.js` to handle state transition; and `sagas.js` to carry out side-effects.

> In each of the above directories, the `__tests__` folder contains the test files for the modules of that directory.

## Features

- List users from [Random User API](https://randomuser.me/)
- Infinity scroll
- Sticky search bar at the top
- Settings page
- Persistent settings after refresh (using localStorage)
- Unit tests
- Easy install with Docker
- API Exception handling
- Code linting
- Docs (this file)

## Technologies

- ReactJS
- Redux-Saga
- Axios
- Ant Design
- JEST
- Sass
- Eslint
- Docker
