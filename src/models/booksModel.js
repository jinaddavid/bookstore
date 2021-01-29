import { isArray } from "../factories/Validations";
import {
  FormatNumber,
  FormatPhoneNumber,
  GetFullName,
  HTTPS,
  InternalURL,
  ExtractName,
} from "../factories/FormatHandlers";
import { alphabeticFormat, formatForChannel } from "../factories";

const GET_PENDING_JOBS = "GetPendingJobs"
const USERS_GETCUSTOMER_MODEL = "UsersGetCustomerModel"
export const BookList = (arg) => {
  console.log(arg, 'arg');
  const { books } = arg;
  // let data = arg;
  if (!isArray(books)) return [];

  let res = [];

  books.forEach((item, id) => {
    res.push({
      image: item.image,
      isbn13: item.isbn13,
      price: item.price,
      subtitle: item.subtitle,
      title: item.title,
      url: item.url,
      starrate: 4.0,
      authour: "Unknow",
    });
  });
  return [res];
};
export const SingleBookList = (item) => {
  console.log(item, 'arg');


  // let res = [];


  let res = {
    authors: item.authors,
    desc: item.desc,
    image: item.image,
    isbn10: item.isbn10,
    isbn13: item.isbn13,
    language: item.language,
    pages: item.pages,
    price: item.price,
    publisher: item.publisher,
    rating: item.rating,
    subtitle: item.subtitle,
    title: item.title,
    url: item.url,
    year: item.year,
  };

  return [res];
};
