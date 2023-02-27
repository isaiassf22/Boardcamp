import { customerSchema } from "../models/customers.schemma.js"


export async function validCustomer (req,res,next){
   const dataCustomer = req.body
    const {error}= customerSchema.validate( dataCustomer,{abortEarly: false})
    if (error){
        const errors= error.details.map ((detail)=> detail.message)
       return res.status(400).send({errors})
    }

    res.locals.customer=dataCustomer
    next()
}