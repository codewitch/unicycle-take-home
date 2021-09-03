import {renderInlineElement} from './index'

describe('Tests', () => {


  describe('renderInlineElement', () => {
    it('should render links', () => {
      const input = { type: "link", content: "link in it", url: "https://example.com" }
      const result = renderInlineElement(input)
      expect(result).toEqual(`<a href=${input.url}>${input.content}</a>`)
    })
    it('should render text', () => {
      const input = { type: "text", content: "This is a paragraph, with a " }
      const result = renderInlineElement(input)
      expect(result).toEqual(`<p>${input.content}</p>`)
    })
  })
})