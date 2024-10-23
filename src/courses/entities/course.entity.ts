import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number 

    @Column('varchar' , {length:30})
    title: string

    @Column('varchar' , {length:30})
    description: string

    @Column('double')
    weeks: number

    @Column('double')
    tuition: number

    @Column('varchar' , {length:30})
    minimumSkill : minimumSkill

    @Column('date')
    createdAt: Date

}

enum minimumSkill {
    'Beginner',
    'Intermediate',
    'Advance'
}