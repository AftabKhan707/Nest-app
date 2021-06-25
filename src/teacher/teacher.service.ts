import { Injectable } from "@nestjs/common";
import { teachers } from "src/db";
import { FindTeacherResponseDto } from "./dto/teachers.dto";

@Injectable()
export class TeacherService{
    private teachers=teachers;

    getTeachers(): FindTeacherResponseDto[]
    {
          return this.teachers;
    }
    getTeacherByid(teacherId: String): FindTeacherResponseDto{
        return this.teachers.find(o =>{
            o.id===teacherId;
        })
    }
}