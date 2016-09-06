const sqlite3 = require('./sqlite3');
const db = new sqlite3.Database("db.sqlite");

function onUpdate(type, db, table, oldValues, newValues) {
  if(type === "insert") {
    // console.log("inserted:", newValues);
  }
  else if(type === "update") {
    // console.log("updated:", oldValues, " to ", newValues);
  }
}

db.addListener("preupdate", onUpdate);

// db.run('CREATE TABLE foo (id INTEGER PRIMARY KEY,  name TEXT NOT NULL UNIQUE);', function() {
//   db.run('INSERT INTO foo (name) VALUES ("James")', function() {
//     db.run('UPDATE foo SET name="Sarah"', function() {
//       db.removeListener("preupdate", onUpdate)
//       db.close();
//     });
//   });
// });

db.run('UPDATE transactions SET description="foo" WHERE amount < 40000', function(err) {
  console.log(this);
  db.removeListener("preupdate", onUpdate);
  db.close(function(err) {
    console.log(err);
  });
});

// module.exports = sqlite3;
