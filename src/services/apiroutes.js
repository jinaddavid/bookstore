export default {
  seachBooks(Query) {
    return `/search/${Query}`;
  },
  singleBook(isbn) {
    return `/books/${isbn}`;
  },
  getNewBooks(isbn) {
    return `//new`;
  },
};
