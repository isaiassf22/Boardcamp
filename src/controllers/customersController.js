import { connectionPG } from "../database/database.js";

 
export async function createCustomers(req,res){
const {name,phone,cpf,birthday}= res.locals.dataCustomer
try{
   await connectionPG.query("INSERT INTO customers (name,phone,cpf,birthday) VALUES ($1,$2,$3,$4)",
   [name,phone,cpf,birthday])
   res.status(201).send("created!")
}catch(err){
    res.status(500).send(err.message)
}

}



export async function queryCustomers (req,res){

    try{
        const customersList= await connectionPG.query('SELECT * FROM customers')
        res.send(customersList.rows)
    } catch(err){
            res.status(500).send(err.message)
    }

}