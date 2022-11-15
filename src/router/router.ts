import {Router} from "express";
import studentController from "../controller/student-controller";

export const router = Router();
router.get('', studentController.getAll);
router.post('/products', studentController.addStudent)