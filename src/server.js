const console = require('better-console');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const helmet = require('helmet');
const cors = require('cors');
const notFound = require('./middleware/notFound');
const authenticateToken = require('./middleware/authenticateToken');
const errorHandler = require('./middleware/errorHandler');
const bodyParser = require('body-parser');
const path = require('path');
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

dotenv.config({ path: 'src/config/config.env' });

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        security: [ { bearerAuth: [] } ],
        basePath: '/api',
        info: {
            title: 'Your Little Earth API',
            description: 'Project for hackathon: Call for Code University Spot Challenge for Europe, Middle East and Africa: Students vs Climate Change',
            contact: {
                name: 'Ruben Fricke',
                email: "427757@student.fontys.nl"
            },
            servers: ['https://localhost:5000/api']
        },
        securityDefinitions: {
            bearerAuth: {
              type: 'apiKey',
              name: 'authorization',
              scheme: 'bearer',
              in: 'header',
            },
          },
    },
    apis: ['src/routes/*.js'],
}


const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
app.use('/api/login', require('./routes/login'));
app.use('/api/activity', require('./routes/service'));
app.use('/api/friends', authenticateToken, require('./routes/friends'));
app.use('/adminpanel', require('./routes/adminpanel'));
app.use('/api/events', require('./routes/event'));

// Custom middleware here
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

const db = require('./models');

db.sequelize.sync().then((req) => {
    app.listen(PORT,
        console.log(`Server up and running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
});

// Custom middleware here
app.use(notFound);
