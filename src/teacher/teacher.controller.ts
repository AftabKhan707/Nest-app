import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teachers.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
    constructor(private readonly obj2:TeacherService){}

    @Get()
    getallteacher(): FindTeacherResponseDto[]
    {
        return this.obj2.getTeachers();
    }
    @Get(':teacherid')
    getTeacherByid(@Param('teacherid') tid:string): FindTeacherResponseDto
    {
        return this.obj2.getTeacherByid(tid);
    }
    


}
