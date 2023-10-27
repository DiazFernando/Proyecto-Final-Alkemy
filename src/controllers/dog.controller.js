import axios from 'axios';
import { getMock } from '../services/dog.service';

export const getMock = (req, res, next) => {
    try {
        throw new Error('Esto es un error con un código de estado personalizado');
        res.status(200).json("Hola desde get Mock");
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
};

export const usingAxios = async (req, res, next) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al hacer la solicitud a la API externa' });
    }
};