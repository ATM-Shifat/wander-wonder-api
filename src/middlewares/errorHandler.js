const errorHandler = (err, req, res, next) => {
    console.log(err.stack)
    res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || "Internale Server Error",
    })
}

export default errorHandler