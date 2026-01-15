import { DefaultSvg } from "../renderers/svg.renderer.js";

const createStats=async(req,res)=>{
    const {username}=req.params
    res.setheader("Content-Type","image/svg+xml")
    res.send(DefaultSvg())
}

export {createStats};