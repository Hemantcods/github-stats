import { percentSvg } from "../renderers/svg.renderer.js";
import {createPercentage,} from "../services/language.services.js";

const createStats=async(req,res)=>{
    const {username}=req.params
    res.setHeader("Content-Type","image/svg+xml")
    const language_percent=await createPercentage(username)
    // console.log(language_percent)
    res.send(percentSvg(language_percent))
}

export {createStats};