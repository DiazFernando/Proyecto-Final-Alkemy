import axios from 'axios';

export const getAll = (req, res, next) => {
    try {
        res.status(200).json("Hola desde get Mock");
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
};

export const vehiculo1 = (req, res, next) => {
    res.status(200).json("vehiculo");
};

export const vehiculo2 = (req, res, next) => {
    
        res.status(200).json("vehiculo2");
    
};

export const vehiculo3 = (req, res, next) => {
        res.status(200).json("vehiculo3");
    
};