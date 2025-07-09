export type IUser = {
  _id: string;
  name: string;
  email: string;
  profilePicture?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type TUserToken = {
  userId: string;
  userEmail: string;
  iat?: number;
  exp?: number;
};
