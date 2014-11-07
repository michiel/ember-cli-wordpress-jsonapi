# ember-cli-wordpress-jsonapi

This ember-cli addon is a work-in-progress.

It uses Wordpress as a content back-end via the [Wordpress JSON-API plugin](https://wordpress.org/plugins/json-api/)

Configure a proxy to your wordpress installation by adding the relevant configuration to .ember-cli

    {
      "disableAnalytics": false,
      "wordpressJsonApi" : {
        "proxyPath" : "/wordpress",
        "proxyHost" : "example.com",
        "useSSL"    : true
      }

    }

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running / Development

* SETUP THE PROXY FOR YOUR WORDPRESS SITE
* `ember server`
* Visit your app at http://localhost:4200.

## Running / Production

* I recommend setting up a server-side proxy for this

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
