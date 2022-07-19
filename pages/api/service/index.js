export default function services(req, res){
    return res.status(200).json([
        {
            id: 1,
            title: "دندان پزشکی اطفال",
            titleEn: "Pediatric Dentistry",
            description: "",
            descriptionEn: "",
        }
    ])
}