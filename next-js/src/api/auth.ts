import request from "./axios";

interface signUpProps {
  email: string;
  pwd: string;
  nick: string;
}

export default {
  signUp({ email, pwd, nick }: signUpProps) {
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
};
