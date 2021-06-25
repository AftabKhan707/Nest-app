import { Injectable, Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { StudentService } from 'src/student/student.service';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { TeacherModule } from 'src/teacher/teacher.module';
import { TeacherService } from 'src/teacher/teacher.service';
import { StudentController } from '../student/student.controllers';


@Module({
  imports: [TeacherModule,StudentModule],
  
  
})
export class AppModule {}
