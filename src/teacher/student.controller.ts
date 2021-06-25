import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    constructor(private readonly obj3:StudentService){}

    
    @Get()
    getstudents(@Param('teacherId') tid:string)
    {
         return this.obj3.getStudetByteacherId(tid);
    }
    @Put(':sid')
    updateStudent(@Param('teacherId') tid:String,
                  @Param('sid') sid:String)
    {
        
       return `Update Student with ${sid} and Teacher with ${tid}`;
    }


}