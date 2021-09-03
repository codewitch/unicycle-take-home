
// TODO: maybe create types for each type of block elment, since they seem to have different constraints for their children
interface BlockElement {
  type: "paragraph" | "blockquote" | "list" | "list-item" | "document";
  children: Array<InlineElement | BlockElement>
}

interface InlineElement {
  type: "text" | "link";
  content: string;
  url?: string;
}


export function renderDocument(){

}


export function renderBlockElement(element: BlockElement){
  const {type, children} = element



}


export function renderInlineElement(element: InlineElement){
  const {type, content, url} = element;

  if(type === 'link'){
    return`<a href=${url}>${content}</a>`
  }
  else if(type === 'text'){
    return`<p>${content}</p>`
  } else {
    console.error('element is not of type link or text')
  }
}