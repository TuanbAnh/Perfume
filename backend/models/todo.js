const db = require("../config/database");

exports.getAllTodos = function (callback) {
  db.query("SELECT * FROM perfume", callback);
};

exports.getTodoById = function (id, callback) {
  db.query("SELECT * FROM perfume WHERE id = ?", [id], callback);
};

exports.createTodo = function (newTodo, callback) {
  db.query("INSERT INTO perfume SET ?", newTodo, callback);
};

exports.updateTodo = function (id, updatedTodo, callback) {
  db.query("UPDATE perfume SET ? WHERE id = ?", [updatedTodo, id], callback);
};

exports.deleteTodo = function (id, callback) {
  db.query("DELETE FROM perfume WHERE id = ?", [id], callback);
};
