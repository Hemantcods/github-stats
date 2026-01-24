import { colors } from "../data/data.dummy.js";
import { svgrect,svgprogressbar, svgtext,BulletPointSection } from "./componets.renderer.js"

const DefaultSvg=()=>{
    return svgrect(svgprogressbar()+svgtext("Top Languages")+BulletPointSection)
}

const percentSvg=(language_percent)=>{
    // sort the language accoeding to percentage
    let sortedLanguages = Object.keys(language_percent).sort(
    (a, b) => Number(language_percent[b]) - Number(language_percent[a])
  );
    if (sortedLanguages>6){
        sortedLanguages=sortedarray.slice(0,7)
    }
    let sortedPercentage=[]
    for(const lang of sortedLanguages){
        sortedPercentage.push(language_percent[lang])
    }
    console.log(sortedLanguages)
    console.log(sortedPercentage)
    return svgrect(svgprogressbar(sortedPercentage,colors)+svgtext("Top Languages")+BulletPointSection(sortedLanguages,colors))
}
export {DefaultSvg,percentSvg}