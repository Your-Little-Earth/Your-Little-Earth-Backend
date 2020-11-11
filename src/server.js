const console = require('better-console');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const helmet = require('helmet');
const cors = require('cors');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const bodyParser = require('body-parser');
const path = require('path');

dotenv.config({ path: 'src/config/config.env' });

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, './public')));

app.use(express.urlencoded({ extended: false }))

app.use(bodyParser.urlencoded({ extended: false }));

// Development Setup
if (process.env.NODE_ENV === 'development') {
  // require morgan if in development mode
  // setting morgan to dev: https://www.npmjs.com/package/morgan#dev
  app.use(require('morgan')('dev'));
}

// Put all the server-wide middleware here
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(helmet());
app.use(express.json());

// All routes here
app.use('/api/users', require('./routes/user'));
app.use('/adminpanel', require('./routes/adminpanel'));

// Custom middleware here
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT,
  console.log(`Server up and running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
