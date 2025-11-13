import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SchoolsService {

  constructor(

    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>

  ){}

  async create(createSchoolDto: CreateSchoolDto) {
    return 'This action adds a new school';
  }

  async findAll() {
    return await this.schoolRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  async remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
