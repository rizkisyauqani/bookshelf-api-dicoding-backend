const { nanoid } = require("nanoid");
const books = require("./books");

const saveBook = (request, h) => {
  const id = nanoid(16);
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  let finished = false;
  pageCount === readPage ? (finished = true) : (finished = false);
  const insertedAt = new Date().toISOString;
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  if (!name) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
    response.code(400);
    return response;
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
    response.code(400);
    return response;
  }

  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }
};

const getAllBooks = () => ({
  status: "success",
  data: {
    books: books.map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    })),
  },
});

const getBookById = (request, h) => {
  const { id } = request.params;

  const book = books.filter((b) => b.id === id)[0];

  if (book.id !== id) {
    const response = h.response({
      status: "fail",
      message: "Buku tidak ditemukan",
    });
    response.status(404);
    return response;
  }

  ({
    status: "success",
    data: {
      book,
    },
  });
};

module.exports = { saveBook, getAllBooks, getBookById };
