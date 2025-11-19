import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { AuthGuard } from '@auth/guard/auth.guard';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post()
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolsService.create(createSchoolDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.schoolsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.schoolsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolsService.update(+id, updateSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.schoolsService.remove(+id);
  }
}
