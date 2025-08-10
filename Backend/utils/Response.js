const Response = async (data, message, statusCode, res) => {
    return res.status(statusCode || 200).json({
        success : true, 
        message : message,
        data
    })
}

export default Response;