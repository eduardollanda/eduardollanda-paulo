const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const sessionsController = require('./controllers/SessionsController')

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id',IncidentsController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', sessionsController.create);

module.exports = routes;