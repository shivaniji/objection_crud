
exports.up = function(knex) {
    return knex.schema.createTable("Navgurukul", function (table) {
        table.increments("id");
        table.string("name").notNullable();
        table.string("surname").notNullable();
        table.string("email").unique().notNullable();
       
    })
};


exports.down = function(knex) {
  return knex.schema.dropTable("Navgurukul")
};
