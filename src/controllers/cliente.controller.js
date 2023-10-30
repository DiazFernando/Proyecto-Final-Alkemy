import axios from 'axios';

export const getAll = (req, res, next) => {
    try {
        res.status(200).json("Hola desde get Mock");
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
};

export const cliente1 = (req, res, next) => {
    res.status(200).json("cliente");
};

export const cliente2 = (req, res, next) => {
    
        res.status(200).json("cliente2");
    
};

export const cliente3 = (req, res, next) => {
        res.status(200).json("cliente3");
    
};