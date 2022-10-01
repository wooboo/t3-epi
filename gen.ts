import manifest from "./manifest.json";
import fs from 'fs';
const file = fs.openSync("./src/contentTypes.ts", "w");
fs.writeSync(file, Buffer.from(
`import { Block, Page, Image, Video, PropertyLongString, PropertyUrl, Media, PropertyContentReference, PropertyPageReference, PropertyBlock, PropertyStringList, PropertyBoolean, PropertyLinkCollection, PropertyContentArea, PropertyXhtmlString, PropertyContentReferenceList, PropertyDate, PropertyNumber, PropertyIntegerList, PropertyPageType, PropertyCategory, PersonListProperty } from "./baseTypes";

`));
    
for (const contentType of manifest.contentTypes) {
    const props = 
`& {
${contentType.properties.map(p=>(`  ${lowerFirstLetter(p.name)}: ${p.dataType};`)).join("\n")}
}`;
    fs.writeSync(file, Buffer.from(
`export type ${contentType.name} = ${contentType.baseType} ${contentType.properties.length>0?props:""};
`));
}
fs.closeSync(file);

function lowerFirstLetter(text:string) {
    return text.charAt(0).toLowerCase() + text.slice(1);
  }