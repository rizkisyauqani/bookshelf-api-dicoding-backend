const { saveBook, getAllBooks, getBookById } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: saveBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooks,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookById,
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

module.exports = routes;
