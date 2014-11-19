import DS from 'ember-data';

export default DS.Model.extend({
  type           : DS.attr('string'),
  slug           : DS.attr('string'),
  url            : DS.attr('string'),
  title          : DS.attr('string'),
  title_plain    : DS.attr('string'),
  content        : DS.attr('string'),
  excerpt        : DS.attr('string'),
  date           : DS.attr('string'),
  modified       : DS.attr('string'),
  categories     : DS.attr('raw'),
  tags           : DS.attr('raw'),
  comments       : DS.attr('raw'),
  attachments    : DS.attr('raw'),
  comment_count  : DS.attr('number'),
  comment_status : DS.attr('string'),
  thumbnail      : DS.attr('string'),
  custom_fields  : DS.attr('raw')
});
