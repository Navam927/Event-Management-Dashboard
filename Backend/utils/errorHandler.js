const errorHandler = async(err, message, statusCode, res) => {
    if (err) {
        console.log(err.message);
    }
    return res.status(statusCode || 500 ).json({
        success : false, 
        message : message || err.message,
    })
}

export default errorHandler;