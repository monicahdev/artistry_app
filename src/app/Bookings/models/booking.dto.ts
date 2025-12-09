export class BookingDTO {
  constructor(
    public id: number,
    public user_id: number,
    public service_id: number,
    public date_hour: string,
    public comments: string | null,
    public status: string,
    public created_at: string
  ) {}
}

export class BookingCreateDTO {
  constructor(
    public service_id: number,
    public date_hour: string,
    public comments?: string
  ) {}
}

export class BookingUpdateDTO {
  constructor(
    public date_hour?: string,
    public comments?: string | null,
    public status?: string
  ) {}
}
