import express from 'express';
import './database/mongoDB';
import cors from "cors";
import { userRoutes } from './routes/userRoutes';
import { assessmentRoutes } from './routes/assessmentRoutes';
import { questionRoutes } from './routes/questionRoutes';
import { classroomRoutes } from './routes/classroomRoutes';
import { answerRoutes } from './routes/answerRoutes';

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