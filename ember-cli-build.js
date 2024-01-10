'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    dotenv: {
      clientAllowedKeys: ['MAPBOX_ACCESS_TOKEN'],
    },
  });

  return app.toTree();
};
