import { Expose } from 'class-transformer';
import { ResponseMessage } from 'src/types';

export class UserSerializeDto {
  @Expose()
  name: string;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  birthDate: Date;

  @Expose()
  lat: number;

  @Expose()
  lng: number;

  @Expose()
  access_token?: string;

  @Expose()
  message?: ResponseMessage;
}
