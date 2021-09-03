
// TODO: maybe create types for each type of block elment, since they seem to have different constraints for their children
interface BlockElement {
  type: string;
  children: Array<InlineElement | BlockElement>
}

interface InlineElement {
  type: string;
  content: string;
  url?: string
}


function renderDocument(){

}


function renderBlockElement(){}


function renderInlineElement(){}