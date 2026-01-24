
import { languageData } from "../data/data.dummy.js";
import { DefaultSvg, percentSvg } from "../renderers/svg.renderer.js";
// import { getRepos,languageData, createPercentage } from "../services/language.services.js";

const createStats=async(req,res)=>{
    // const {username}=req.params
    res.setHeader("Content-Type","image/svg+xml")
    res.send(percentSvg(languageData))
    // const response=await createPercentage(username)
    // console.log(response)
    // return res.send(response)
    // console.log(process.env.GITHUB_TOKEN)
    // const out=await getAllLanguageData(username,repos)
    // res.json(out)
    
}

export {createStats};