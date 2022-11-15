import { Request, Response } from "express";
declare class StudentController {
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addStudent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: StudentController;
export default _default;
