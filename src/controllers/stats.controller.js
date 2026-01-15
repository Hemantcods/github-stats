import { DefaultSvg } from "../renderers/svg.renderer.js";

const createStats=async(req,res)=>{
    const {username}=req.params
    res.send(DefaultSvg())
}

export {createStats};