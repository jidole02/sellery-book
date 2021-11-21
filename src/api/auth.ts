import request from "./axios";
import { TOKEN } from "./export";

export default {
  signUp({ email, pwd, nick }) {
    return request({
      url: `/user/signup`,
      method: "post",
      data: {
        nickname: nick,
        email: email,
        password: pwd,
      },
    });
  },
  login({ pwd, email }) {
    return request({
      url: `/user/login`,
      method: "post",
      data: {
        email: email,
        password: pwd,
      },
    });
  },
  tokenCheck(token) {
    return request({
      url: `/user/check`,
      method: "post",
      data: {
        token: token,
      },
    });
  },
  logout() {
    return request({
      url: `/user/logout`,
      method: "put",
      headers: {
        authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    });
  },
};
