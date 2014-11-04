import DS from 'ember-data';

export default DS.RESTAdapter.extend({

    namespace : 'wordpress/json',

    buildURL: function() {
      throw new Error('buildURL : Unimplemented : override per-model');
    },

    find: function(store, type, id) {
      return this.ajax(
        this.buildURL(type.typeKey, id),
        'GET'
      );
    },

    findAll: function(store, type, sinceToken) {
      var query;

      if (sinceToken) {
        query = { since: sinceToken };
      }

      return this.ajax(
        this.buildURL(type.typeKey),
        'GET',
        { data: query }
      );
    },

    findQuery: function() {
      throw new Error('findQuery : Unimplemented');
    },

    findMany: function() {
      throw new Error('findMany : Unimplemented');
    }

});
