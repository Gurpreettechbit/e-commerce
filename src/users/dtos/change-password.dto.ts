import { Length, IsString } from 'class-validator';
import { Trim } from 'src/libs';

export class ChangePasswordDto {
  @Length(8, 60)
  @Trim()
  @IsString()
  oldPassword: string;

  @Length(8, 60)
  @Trim()
  @IsString()
  newPassword: string;
}
