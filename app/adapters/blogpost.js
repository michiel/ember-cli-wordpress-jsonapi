import WordpressJSONApi from './wordpress-jsonapi';

function urlProps(hash) {
  var args = [];
  for (var key in hash) {
    args.push(key + '=' + hash[key]);
  }
  return args.join('&');
}

export default WordpressJSONApi.extend({

    wpQueryProperties : {
      'slug'   : 'news',
      'status' : 'publish',
      'page'   : 1
    },

    buildURL: function(type, id /*, record */) {

      var path;

      if (id) {
        path = [
          this.namespace,
          'get_post',
          id,
          '?json=1'
          ].join('/');
      } else {
        path = [
          this.namespace,
          // 'get_recent_posts',
          'get_category_posts',
          '?' + urlProps(this.wpQueryProperties) + '&json=1'
          ].join('/');
      }

      return path;

     }
});
