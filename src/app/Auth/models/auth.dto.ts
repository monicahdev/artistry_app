export class AuthDTO {
  user_id: string;
  access_token: string;
  email: string;
  password: string;
  token_type: string;

  constructor(
    user_id: string,
    access_token: string,
    email: string,
    password: string,
    token_type: string
  ) {
    this.user_id = user_id;
    this.access_token = access_token;
    this.email = email;
    this.password = password;
    this.token_type = token_type;
  }
}
