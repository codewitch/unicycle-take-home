export const sampleRenderedDocument=`<article class="email">
<p>This is a paragraph., with a<a href="https://example.com">link in it</a>.</p>
<ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <ol>
        <li>In a nested list</li>
    </ol>
</ol>
<blockquote>
    <p>
        This text is quoted.
    </p>
</blockquote>
</article>`

export const sampleDocument = {
  type: "document",
  children: [
      {
          type: "paragraph",
          children: [
              { type: "text", content: "This is a paragraph, with a " },
              { type: "link", content: "link in it", url: "https://example.com" },
              { type: "text", content: "." }
          ]
      },
      {
          type: "list",
          children: [
              {
                  type: "list-item",
                  children: [{ type: "text", content: "List item 1"}]
              },
              {
                  type: "list-item",
                  children: [{ type: "text", content: "List item 2"}]
              },
              {
                  type: "list",
                  children: [
                      {
                          type: "list-item",
                          children: [{ type: "text", content: "In a nested list"}]
                      },
                  ],
              },
          ],
      },
      {
          type: "blockquote",
          children: [
              {
                  type: "paragraph",
                  children: [
                      { type: "text", content: "This text is quoted." },
                  ]
              }
          ]
      }
  ]
};