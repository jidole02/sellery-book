import request from "./axios";

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
};
