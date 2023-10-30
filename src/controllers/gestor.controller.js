import axios from 'axios';

export const getAll = (req, res, next) => {
    try {
        res.status(200).json("Hola desde get Mock");
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
};

export const gestor1 = (req, res, next) => {
    res.status(200).json("gestor");
};

export const gestor2 = (req, res, next) => {
    
        res.status(200).json("gestor2");
    
};

export const gestor3 = (req, res, next) => {
        res.status(200).json("gestor3");
    
};