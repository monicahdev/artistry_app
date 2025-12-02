export class MakeupServiceDTO {
  id: number;
  makeup_service_name: string;
  description: string;
  photo: string;
  price_from: number;
  duration: number;
  created_at?: Date;

  constructor(
    id: number,
    makeup_service_name: string,
    description: string,
    photo: string,
    price_from: number,
    duration: number,
    created_at?: string
  ) {
    this.id = id;
    this.makeup_service_name = makeup_service_name;
    this.description = description;
    this.photo = photo;
    this.price_from = price_from;
    this.duration = duration;
    this.created_at = created_at ? new Date(created_at) : undefined;
  }
}
