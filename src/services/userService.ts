import { FormValues, IUserForm } from "../Models/UserModel";
import { http } from "./apiService";

export const registerUser = (userInfo: FormValues) => {
  return http.post<IUserForm>("/register", userInfo);
};
