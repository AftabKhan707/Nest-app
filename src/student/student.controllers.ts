import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateStudentDto, FindStudentsResponseDto, StudentResponseDto, UpdateStudentDto } from "src/student/dto/students.dto";
import { StudentService } from "./student.service";

@Controller('student')
export class StudentController{

    constructor(private readonly obj1:StudentService){};

    @Get()
    getStudents():FindStudentsResponseDto[]{
        return this.obj1.getStudents();
    }

    @Get(':id')
    getStudentByid(@Param('id') sid:String):FindStudentsResponseDto
    {
        console.log(sid);
            return this.obj1.getstudentbyid(sid);
    }

    @Post()
    createStudent(@Body() body :CreateStudentDto): StudentResponseDto
    {
         
        return this.obj1.createStudent(body);
    }
    @Put(':id')
    updateStudent(@Param('id') sid:string, @Body() body:UpdateStudentDto):StudentResponseDto
    {
        return this.obj1.updateStudent(body,sid);
    }

}