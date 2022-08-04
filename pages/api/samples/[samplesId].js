import samples from "../../../src/tools/dataApi/samples"

export default async function handler(req, res){
    const { method, query } = req;
    if(method === "GET"){
        const target = await getOneService(query);
        return res.status(200).json({target});
    }
}

export async function getOneSample(query){
    if(parseInt(query.sampleId) <= 6){
        const target = samples.filter(item => item.id === parseInt(query.sampleId));
        return target;
    }else{
        return "Not Found !";
    }
}