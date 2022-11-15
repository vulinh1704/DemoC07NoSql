"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("../model/student");
class StudentController {
    constructor() {
        this.getAll = async (req, res) => {
            let students = await student_1.Student.find();
            console.log(students);
            return res.status(200).json(students);
        };
        this.addStudent = async (req, res) => {
            await student_1.Student.insertMany(req.body);
            return res.status(201).json({
                message: "ok"
            });
        };
    }
}
exports.default = new StudentController();
//# sourceMappingURL=student-controller.js.map