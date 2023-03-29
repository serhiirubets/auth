import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
    email: string;
    password: string;
}
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    // Move to other "Bann" table
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    // Move to other "Bann" table
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;
}