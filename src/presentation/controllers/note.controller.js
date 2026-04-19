export default class NoteController {
  constructor(noteService) {
    this.noteService = noteService;
  }
  createNote = async (req, res) => {
    const data = req.body;
    data.userId = "user123"; // Simulamos un userId fijo
    try {
      const note = await this.noteService.createNote(data);
      res.status(201).json(newNote);
    } catch (error) {
      res.status(404).json({ error: 'Error al crear la nota' });
    }
}
}

getNotesByUserId = async (req, res) => {
  const userId = "user123"; // Simulamos un userId fijo
  try {
    const notes = await this.noteService.getNotesByUserId(userId);
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json({ error: 'Error al obtener las notas' });
  }
}

