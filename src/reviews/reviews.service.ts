import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { ReviewsController } from './reviews.controller';

import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {

  //inyectar: obtener una isntancia del
  //repositorio como atributo de 
  //la clase BotcampsService: sin
  //necesidad de instanciarlo
  constructor(@InjectRepository(Review)
    private reviewRepository:
      Repository<Review>  ){

    }

  create(payload: any) {
    //1.Crear una instancia de una entity bootcamp 
    //bootcampm
    const newReview = this.
    reviewRepository.
                        create(payload);
    //2. grabar esa instancia y retornarla
    return  this.
    reviewRepository.
            save(newReview)
  }

  findAll() {
    return this.reviewRepository.find()
  }

  findOne(id: number) {
    return this.reviewRepository.findOneBy({id}) ;
  }

  async update(id: number, payload: any) {
    const updReview = await this.reviewRepository.findOneBy({id}) ; 
  
    this.reviewRepository.merge(updReview , payload)

    return this.reviewRepository.save(updReview)
  }

  async remove(id: number) {
    const delReview = await this.reviewRepository.findOneBy({id});

    this.reviewRepository.delete(delReview)

    return delReview 
  }
}
