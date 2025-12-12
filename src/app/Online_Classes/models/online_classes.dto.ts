export class OnlineClassDTO {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public url: string,
    public created_at: string
  ) {}
}
export interface OnlineClassCreateDTO {
  name: string;
  description: string;
  url: string;
}

export interface OnlineClassUpdateDTO {
  name?: string;
  description?: string;
  url?: string;
}
