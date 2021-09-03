
// TODO: maybe create types for each type of block elment, since they seem to have different constraints for their children
interface BlockElement {
  type: "paragraph" | "blockquote" | "list" | "list-item" | "document";
  children: Array<InlineElement> | Array<BlockElement>
}

interface InlineElement {
  type: "text" | "link";
  content: string;
  url?: string;
}


export function renderDocument(document: BlockElement){
  const {children = []} = document
  return`<article class="email">${children.forEach((child) => renderBlockElement(child))}</article>`
}


export function renderBlockElement(element: BlockElement | InlineElement){
  // dug myself into a bit of a hole and messed up the typing here.....needs to be fixed
  //@ts-ignore
  const {type, children = []} = element
  if(type === 'text' || type === 'link'){
    return renderInlineElement(element)
  }
  if(type === 'paragraph'){
    return`<p>${children.forEach((child) => renderBlockElement(child))}</p>`
  }
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