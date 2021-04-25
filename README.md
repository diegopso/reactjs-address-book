# Address Book App

## Using the repository

### Development

Clone the repository:

```
git clone https://github.com/diegopso/reactjs-address-book.git
```

Install and execute using NPM (v12):

```
npm install
npm start
```

> Access at https://localhost:3000

Or use Docker instead:

```
docker-compose up app
```

> Access at https://localhost:3001

### Tests

After instalation:

```
npm run test
```

Or:

```
docker-compose up test
```

### Production

```
docker-composer up app-prod
```

> Access at https://localhost:8000

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
- Eslint
- Redux-Saga
- Docker
- Axios
- JEST
- Ant Design
