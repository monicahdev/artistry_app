export class UserDTO {
  id: number;
  email: string;
  role: 'USER' | 'ADMIN';
  created_at?: Date;
  updated_at?: Date;

  constructor(
    id: number,
    email: string,
    role: 'USER' | 'ADMIN',
    created_at?: string,
    updated_at?: string
  ) {
    this.id = id;
    this.email = email;
    this.role = role;
    this.created_at = created_at ? new Date(created_at) : undefined;
    this.updated_at = updated_at ? new Date(updated_at) : undefined;
  }
}

export class MeResponseDTO {
  message: string;
  user: UserDTO;

  constructor(message: string, user: UserDTO) {
    this.message = message;
    this.user = user;
  }
}
