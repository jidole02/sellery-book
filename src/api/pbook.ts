import request from "./axios";
import { TOKEN } from "./export";

export default {
  getNewBook() {
    return request({
      url: `/pbook/new`,
      method: "get",
    });
  },
  getPBook(condition) {
    return request({
      url: `/pbook/get/${condition}`,
      method: "get",
    });
  },
  getBookDetail(id) {
    return request({
      url: `/pbook?id=${id}`,
      method: "get",
    });
  },
  writeComment(bookid, rate, comment) {
    return request({
      url: `/comment/${bookid}`,
      method: "post",
      headers: {
        authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
      data: {
        rate: rate,
        contents: comment,
      },
    });
  },
  getComment(bookid) {
    return request({
      url: `/comment/${bookid}`,
      method: "get",
    });
  },
  getContents(bookid) {
    return request({
      url: `/pbook/contents/${bookid}`,
      method: "get",
    });
  },
  getAllPBook(page, genre, sort) {
    return request({
      url: `/pbook/getall?page=${page}&genre=${genre}&sort=${sort}`,
      method: "get",
    });
  },
};
