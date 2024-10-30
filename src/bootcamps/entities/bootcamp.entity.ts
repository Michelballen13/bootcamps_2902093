import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('bootcamps')
export class Bootcamp {
    @PrimaryGeneratedColumn()
    id: number 

    @Column('varchar', {length : 20})
    phone:string

    @Column('varchar' , {length : 20})
    name: string

    @Column('varchar' , {length:100 , default:"XXXX"})
    address: string

    @Column('text')
    topics: string

    @Column( {name: 'average_rating'} )
    averageRating: number

    @Column( {type: 'timestamp' , name: 'created_at' , default: () => 'CURRENT_TIMESTAMP'} )
    createdAt: Date

}