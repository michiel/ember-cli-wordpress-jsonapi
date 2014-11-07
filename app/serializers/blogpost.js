import DS from 'ember-data';

function transformPayload(payload) {
  return {
    blogposts : payload.posts
  };
}

export default DS.RESTSerializer.extend({
    extractSingle: function(store, type, payload, id) {
      payload = transformPayload(payload);
      return this._super(store, type, payload, id);
    },
    extractArray: function(store, type, payload) {
      payload = transformPayload(payload);
      return this._super(store, type, payload);
    },
    normalize: function(type, hash, property) {
      return this._super(type, hash, property);
    }
  });
