const svgCache=new Map();

export function getSvgCache(username){
    const item=svgCache.get(username)
    if (!item) return null
    if (Date.now()>item.expiry){
        svgCache.delete(username)
        return null;
    }
    return item.svg
}

export function setSvgCache(username,svg,ttl=10*60*60){
 svgCache.set(username,{
    svg,
    expiry:Date.now()+ttl
 })
}