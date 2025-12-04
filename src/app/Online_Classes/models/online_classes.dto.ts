export class OnlineClassDTO {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public url: string,
    public created_at: string
  ) {}
}
