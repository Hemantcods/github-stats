import { svgrect,svgprogressbar, svgtext,BulletPointSection } from "./componets.renderer.js"

const DefaultSvg=()=>{
    return svgrect(svgprogressbar()+svgtext("Top Languages")+BulletPointSection)
}

export {DefaultSvg}