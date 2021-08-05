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
};
