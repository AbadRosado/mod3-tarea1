import { Router } from "express";
import noteController from "../controllers/note.controller.js";
import NoteService from "../../app/services/note.service.js";
import NoteMongoRepository from "../../infrastucture/database/mongo/note.mongo.repository.js";
import  upload  from "../middlewares/upload.middleware.js";

import noteMysqlRepository from "../../infrastructure/database/mysql/note.mysql.repository.js";

const noterepository = new NoteMongoRepository();


const noteService = new NoteService(new NoteMongoRepository());
const noteController = new noteController(noteService);
const router = Router();

router.post("/notes", noteController.createNote);
router.get("/notes", noteController.getNoteByUserId);

export default router;