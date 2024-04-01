const { saveBook } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: saveBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: () => {},
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: () => {},
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: () => {},
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: () => {},
  },
];

module.exports = routes
