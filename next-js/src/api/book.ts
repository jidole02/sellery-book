import request from "./axios";
import { TOKEN } from "./export";

export default {
  getWriteBook() {
    return request({
      url: "/book",
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    });
  },
  sendImg(data) {
    return request({
      url: "/book/upload/img",
      method: "post",
      headers: {
        authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
      data: data,
    });
  },
  uploadBook(obj) {
    return request({
      url: "/book/upload",
      method: "post",
      headers: {
        authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
      data: obj,
    });
  },
  getTempContent(id) {
    return request({
      url: "/book/write",
      method: "post",
      headers: {
        authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
      data: {
        id: id,
      },
    });
  },
  putTempContent(content, id) {
    return request({
      url: "/book/write",
      method: "put",
      headers: {
        authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
      data: {
        contents: content,
        id: id,
      },
    });
  },
  deleteBook(password, id) {
    return request({
      url: "/book/write",
      method: "delete",
      headers: {
        authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
      data: {
        password: password,
        id: id,
      },
    });
  },
  publishBook(password,id){
    return request({
      url : '/book/publish',
      method:"post",
      headers: {
        authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
      data: {
        password: password,
        id: id,
      },
    })
  }
};
