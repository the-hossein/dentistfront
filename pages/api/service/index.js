import services from "../../../src/tools/dataApi/services"

export default function handler(req, res){
    return res.status(200).json({services: services})
}