import request from "./axios";

export default {
  getNewBook() {
    return request({
      url: `/pbook/new`,
      method: "get",
    });
  },
  getPBook(condition){
      return request({
          url:`/pbook/get/${condition}`,
          method:'get'
      })
  }
};
