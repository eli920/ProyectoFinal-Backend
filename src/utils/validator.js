const {validationResult}= require('express-validator');

const validationMiddleware= async (req,res,next)=>{
    const errors= await validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    next();
}

module.exports= validationMiddleware;