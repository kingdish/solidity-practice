const routes = require('next-routes')();

routes
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:adderss/requests', '/campaigns/requests/index');

module.exports = routes;
