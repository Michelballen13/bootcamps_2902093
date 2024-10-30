import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number 

    @Column({type: 'varchar',length : 100,  nullable : false})
    title:string

    @Column({type: 'text',  nullable : false})
    comment: string

    @Column({type: 'tinyint',  nullable : false})
    rating: number


}