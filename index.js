
function configFor(conf) {

  if (!!!conf) {
    throw new Error('ember-cli-wordpress-jsonapi : No config specified!');
  }

  if (!!!conf.proxyPath) {
    throw new Error('ember-cli-wordpress-jsonapi : No proxyPath specified!');
  }

  if (!!!conf.proxyHost) {
    throw new Error('ember-cli-wordpress-jsonapi : No proxyHost specified!');
  }

  return {
    proxyPath : conf.proxyPath,
    proxyHost : conf.proxyHost,
    proxyUrl  : (conf.useSSL ? 'https://' : 'http://') + conf.proxyHost
  }
}

module.exports = {
  name: 'ember-cli-wordpress-jsonapi',
  serverMiddleware: function(config) {

    var app     = config.app;
    var options = config.options;
    var conf    = configFor(config.options.wordpressJsonApi);
    var proxy   = require('http-proxy').createProxyServer({});
    var path    = require('path');

    console.log('wordpress-jsonapi : setting up a proxy from ' + conf.proxyPath + ' to ' + conf.proxyUrl);

    app.use(proxyPath, function(req, res, next) {

      // include root path in proxied request
      // req.url = path.join(proxyPath, req.url);

      //
      // WP issues a redirect or 404 if the Host is incorrect
      //

      req.headers.Host = conf.proxyHost;

      console.log('wordpress-jsonapi : proxying call to ' + conf.proxyUrl);
      proxy.web(req, res, { target: conf.proxyUrl });

    });
  }
};
