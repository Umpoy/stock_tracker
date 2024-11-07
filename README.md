# Dividend Tracker

Developed a stock tracking app that estimates dividend returns, empowering users to budget effectively toward financial freedom.
Implemented web scraping techniques to create an API that retrieves stock prices and dividends for net worth calculations.
Utilized local storage to securely maintain user data, including stock names and quantities, enhancing the overall user experience.

![Project View](preview.png)

## Usage Instructions

### Prerequisites

- Node.JS 18 or higher
- cd into `client` and `server` directory and run :

```bash
npm install
```

- cd into `client` and create a `.env` file and paste:

```bash
REACT_APP_NODE_API=http://localhost:5001 # or whatever port you want to run the server on
```

### Instructions

#### Run on One Port

- cd into `server` and run `nodemon` or `node index.js`
- open browser to `http://localhost:5001` or whichever port you use to run the server

#### Run on Two Ports

- cd into `server` and run `nodemon` or `node index.js`
- open new terminal and cd into `client` and run `npm run start`
- your default browser should open up with the application running or you can go to `http://localhost:3000`

## To-Do List:

- [ ] Move localStorage out and into a Database
- [ ] Implement Log In
- [ ] Create Mobile Layout (Currently only desktop)
- [ ] Move to Next.js
- [ ] Implement TypeScript
- [ ] Get access to brokerage API to pull data automatically 🤔
