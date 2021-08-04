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
};
