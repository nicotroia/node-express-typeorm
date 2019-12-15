import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Greeting {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("text")
    text!: string;
}
