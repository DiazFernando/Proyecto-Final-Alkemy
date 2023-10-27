const mockMiddleware = (req, res, next) => {
    console.log("Hola desde el middleware");
    next();
}

module.exports = { mockMiddleware };