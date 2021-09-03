
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
  children.forEach((child) => renderBlockElement(child))
}


export function renderBlockElement(element: BlockElement){
  const {type, children = []} = element
  // if(children.length){
  //   return children.forEach((child) => renderBlockElement(child))
  // }
  // note the way i currently have this is going to cause <p> tags to get rendered twice
  if(type === 'paragraph'){
    return`<p>${children.forEach((child) => renderBlockElement(child))}</p>`
  }
  //not sure why this for each isn't inferring the type....annoying, TODO
  // children.forEach((element, _index, _array) => {
  //   const {type, children} = element
  //   if(type === 'text' || type === 'link'){
  //     return renderInlineElement(element)
  //   }
  //   // render out other element types
  //   if(children)
  // })
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