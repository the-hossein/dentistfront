import samples from "../../../src/tools/dataApi/samples"

export default function handler(req, res){
    return res.status(200).json({samples: samples})
}