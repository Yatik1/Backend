const asyncHandler = (requesHandler) => {
    (req,res,next) => {
        Promise.resolve(requesHandler(req,res,next)).catch((error) => next(error))
    }
}

export {asyncHandler}

/*

const asyncHandler = (func) => async(req,res,next) => {
    try {
        await func(req,res,next)
    } catch (error) {
        res.send(500).json({
            success:false,
            message:error.message
        })
    }
}

*/