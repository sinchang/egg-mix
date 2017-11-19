'use strict';

module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/users', app.controller.home.users);
};
