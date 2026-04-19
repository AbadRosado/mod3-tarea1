import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        dialect: 'mysql',
    });


export const connectMysql = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a MySQL establecida correctamente.');
    } catch (error) {
        console.error('Error al conectar a MySQL:', error);
        process.exit(1); // Salir del proceso si no se puede conectar
    }
};
export default sequelize;