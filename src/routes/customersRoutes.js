import { Router } from "express";
import { createCustomers } from "../controllers/customersController.js";
import { validCustomer } from "../midweares/custumers.mid.js";
import { queryCustomers } from "../controllers/customersController.js";

const customerRoute = Router()
customerRoute.post('/customers',validCustomer,createCustomers)

customerRoute.get('/customers',queryCustomers)


export default customerRoute