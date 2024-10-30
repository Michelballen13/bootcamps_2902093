import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class CoursesService {

  constructor(
    @InjectRepository(Course) private courseRepository: Repository <Course>,
  ) {}

  create(payload: any) {
    const newCurso = this.courseRepository.create(payload)
    return this.courseRepository.save(newCurso)
  }

  findAll() {
    return this.courseRepository.find();
  }

  findOne(id: number) {
    return this.courseRepository.findOneBy({id: id});
  }


  async update(id: number, payload: any) {
    const updCourses = await this.courseRepository.findOneBy({id}) ; 
  
    this.courseRepository.merge(updCourses , payload)

    return this.courseRepository.save(updCourses)
  }

  async remove(id: number) {
    const delCourse = await this.courseRepository.findOneBy({id});

    this.courseRepository.delete(delCourse)

    return delCourse 
  }
}