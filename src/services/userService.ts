import { IUserForm } from "../Models/UserModel";
import { http } from "./apiService";

const registerUser = (userInfo: IUserForm) => {
  return http.post<IUserForm>("/register", userInfo);
};

export { registerUser };
