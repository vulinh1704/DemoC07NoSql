import {Request, Response} from "express";
import {Student} from "../model/student";

class StudentController {
    getAll = async (req: Request , res: Response) => {
        let students = await Student.find();
        console.log(students);
        return res.status(200).json(students);
    }
    addStudent = async (req: Request , res: Response) => {
        await Student.insertMany(req.body);
        return res.status(201).json({
            message : "ok"
        });
    }
}

export default new StudentController();