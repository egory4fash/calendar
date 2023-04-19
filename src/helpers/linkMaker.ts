import {LinksType} from "../data/links";


export const linkMaker = (town:string ='',Links:LinksType) => {
    let link = ''
    if (town[0] === 'В') {
        return Links.Verhn
    } else if (town[0] === 'М') {
        return Links.Miory
    } else if (town[0] === 'Г') {
        return Links.Glub
    } else if (town[0] === 'Ш') {
        return Links.Shark
    }
}