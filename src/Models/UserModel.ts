export interface IUserForm {
  email: string;
  username: string;
  password: string;
}

export type FormValues = IUserForm | Omit<IUserForm, "username">;
