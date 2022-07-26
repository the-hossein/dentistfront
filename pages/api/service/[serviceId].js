import axios from "axios";
import services from "../../../src/tools/dataApi/services"

export default async function handler(req, res){
    const { method, query } = req;
    if(method === "GET"){
        const target = await getOneService(query);
        return res.status(200).json({target});
    }
}

export async function getOneService(query){
    if(parseInt(query.serviceId) <= 11){
        const target = services.filter(item => item.id === parseInt(query.serviceId));
        return target;
    }else{
        return "Not Found !";
    }
}