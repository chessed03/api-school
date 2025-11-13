import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn, TreeLevelColumn } from "typeorm";

@Entity()
export class School {

    // @PrimaryGeneratedColumn()
    @Column({ primary: true, generated: true})
    id: number;
    @Column()
    name: string;
    @Column()
    address: string;
    @DeleteDateColumn()
    deleteAt: Date;

}
