import request from "./axios";

export default {
  getNewBook() {
    return request({
      url: `/pbook/new`,
      method: "get",
    });
  },
};
