import * as image from "../assets/images/img_avatar3.png";

export interface IUser {
  nickname: string;
  userHandle: string;
  profilePicture?: string;
}

export const User: IUser = {
  nickname: "",
  userHandle: "",
  profilePicture: image.default,
};
