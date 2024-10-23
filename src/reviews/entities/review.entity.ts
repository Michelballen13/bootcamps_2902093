import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number 

    @Column('varchar', {length : 20})
    title:string

    @Column('varchar' , {length : 20})
    comment: string

    @Column('double')
    rating: number


}