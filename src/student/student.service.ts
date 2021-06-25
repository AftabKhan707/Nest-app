import { Injectable } from "@nestjs/common";
import { SSL_OP_NO_TLSv1_2 } from "constants";
import { students } from "src/db";
import { FindTeacherResponseDto } from "src/teacher/dto/teachers.dto";
import { CreateStudentDto, FindStudentsResponseDto, StudentResponseDto, UpdateStudentDto } from "./dto/students.dto";

@Injectable()
export class StudentService{
    private students=students;

    getStudents(): FindStudentsResponseDto[] {
        return this.students;
    }
    getstudentbyid(sid: String)
    {
        return this.students.find((obj)=>{
            return obj.id===sid
        })
    }

    createStudent(body: CreateStudentDto) : StudentResponseDto
    {
           let newStudent={
               id:"1",
               name:body.name,
               teacher:body.teacher
           }
           this.students.push(newStudent);

           return newStudent;
    }

    updateStudent(payload: UpdateStudentDto, id: string): StudentResponseDto {
        let updatedStudent: StudentResponseDto

        let updatedStudentList = this.students.map(student => {
            if(student.id === id){
                updatedStudent = {
                    id:id,
                    name:payload.name,
                    teacher:payload.teacher
                }
               // return updatedStudent
            } else return student
        });

        this.students = updatedStudentList

        return updatedStudent
    }
    getStudetByteacherId(teacherid: string): FindStudentsResponseDto[]
    {
        return this.students.filter(student =>{
            return student.teacher
        })
    }
}