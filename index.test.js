import {renderInlineElement} from './index'

describe('Tests', () => {


  describe('renderInlineElement', () => {
    it('should render links', () => {})
    it('should render text', () => {
      const input = { type: "text", content: "This is a paragraph, with a " }
      const result = renderInlineElement(input)
      expect(result).toEqual(`<p>${input.content}</p>`)
    })
  })
})