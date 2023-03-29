import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'email@gmail.com', description: 'User email' })
    readonly email: string;

    @ApiProperty({ example: 'fdfDE334$rf', description: 'User password' })
    readonly password: string;
}