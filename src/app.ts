import express from 'express';
import './main/database/mongoDB';
import cors from "cors";
import { userRoutes } from './presentation/routes/userRoutes';
import { assessmentRoutes } from './presentation/routes/assessmentRoutes';
import { questionRoutes } from './presentation/routes/questionRoutes';
import { classroomRoutes } from './presentation/routes/classroomRoutes';
import { answerRoutes } from './presentation/routes/answerRoutes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', userRoutes);
app.use('/assessments', assessmentRoutes);
app.use('/questions', questionRoutes);
app.use('/classrooms', classroomRoutes);
app.use('/answers', answerRoutes);

export { app };