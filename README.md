# ember-cli-wordpress-jsonapi

This ember-cli addon is a work-in-progress.

It uses Wordpress as a content back-end via the [Wordpress JSON-API plugin](https://wordpress.org/plugins/json-api/)

## Installation

Install in your ember add using npm,

    npm install --save-dev ember-cli-wordpress-jsonapi

## Setup / development

Configure a proxy to your wordpress installation by adding the relevant configuration to .ember-cli

    {
      "disableAnalytics": false,
      "wordpressJsonApi" : {
        "proxyPath" : "/wordpress",
        "proxyHost" : "example.com",
        "useSSL"    : true
      }

    }

## Setup / production

I recommend setting up a server-side proxy for this. An example nginx config for this is,

    location /wordpress {

        rewrite /wordpress/(.*) /$1 break;
        proxy_redirect off;

        #
        # The Host header has to be match the vhost being proxied _and_ the
        # path has to be exact otherwise one of two things can happen,
        #
        # - The request won't reach the correct vhost
        # - A 301 redirect will be issued
        #

        proxy_set_header Host 'blog.example.com';

        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Connection 'Keep-Alive';

        proxy_pass https://blog.example.com/;

      }

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
