export class RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;


  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public gender: string,
  ) {
  }
}

export interface LoginResponse {
  token: string;
  user: User;
}
