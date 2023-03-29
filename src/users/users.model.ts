import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: 1, description: 'Uniq ID' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'user@email.com', description: 'user emal' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: 'fdfW3tfd', description: 'user password' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    // Move to other "Bann" table
    @ApiProperty({ example: true, description: 'Ban or not' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    // Move to other "Bann" table
    @ApiProperty({ example: 'user was bad', description: 'Banning reason' })
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}