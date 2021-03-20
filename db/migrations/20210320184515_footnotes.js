exports.up = function(knex) {
  return Promise.all([
    knex.schema.table('papers', function(table) {
      table.string('footnotes');
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.table('papers', function(table) {
      table.dropColumn('footnotes');
    })
  ]);
};
