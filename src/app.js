import 'dotenv/config';
import express from 'express';
import cors from 'cors';    
import 'express-async-errors';
import morgan from 'morgan';
import { loggerMiddleware } from './presentation/middlewares/logger.middleware.js';
import noteRoutes from './presentation/routes/note.routes.js';
import { connectMongo } from './infrastucture/database/mongo/conection.js';
import { connectMysql } from './infraestructure/database/mysql/connection.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//imagenes estaticas
app.use('/uploads', express.static('uploads'));

app.get('/api/health', (req, res) => {
res.status(200).json({ status: 'OK',message: 'API de notas activa' });
});
//midleware de manejo de errores global

app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).json({ error: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});