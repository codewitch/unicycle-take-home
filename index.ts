
// TODO: maybe create types for each type of block elment, since they seem to have different constraints for their children
interface BlockElement {
  type: string;
  children: Array<InlineElement | BlockElement>
}

interface InlineElement {
  type: "text" | "link";
  content: string;
  url?: string;
}


function renderDocument(){

}


function renderBlockElement(){}


export function renderInlineElement(element: InlineElement){
  const {type, content, url} = element;
  //this was too clever
  // const elementTag = type === 'link' ? 'a':'p'
  // return `<${elementTag} ${type === 'link'}>${content}</${elementTag}>`

  if(type === 'link'){
    return`<a href=${url}>${content}</a>`
  }
  else if(type === 'text'){
    return`<p>${content}</p>`
  } else {
    console.error('element is not of type link or text')
  }
}