import { Injectable } from '@nestjs/common';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';

@Injectable()
export class BootcampsService {

  //inyectar: obtener una isntancia del
  //repositorio como atributo de 
  //la clase BotcampsService: sin
  //necesidad de instanciarlo
  constructor(@InjectRepository(Bootcamp)
    private bootcampRepository:
      Repository<Bootcamp>  ){

    }

  create(payload: any) {
    //1.Crear una instancia de una entity bootcamp 
    //bootcampm
    const newBootcamp = this.
                        bootcampRepository.
                        create(payload);
    //2. grabar esa instancia y retornarla
    return  this.
            bootcampRepository.
            save(newBootcamp)
  }

  findAll() {
    return this.bootcampRepository.find()
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({id}) ;
  }

  async update(id: number, payload: any) {
    const updBootcamp = await this.bootcampRepository.findOneBy({id}) ; 
  
    this.bootcampRepository.merge(updBootcamp , payload)

    return this.bootcampRepository.save(updBootcamp)
  }

  async remove(id: number) {
    const delBootcamp = await this.bootcampRepository.findOneBy({id});

    this.bootcampRepository.delete(delBootcamp)

    return delBootcamp 
  }
}
