(function () { var designJSON = {
  "name": "timeline",
  "label": "Timeline",
  "version": "0.3.1",
  "assets": {
    "css": [
      "./stylesheets/timeline.css"
    ]
  },
  "wrapper": "<div class='funky-wrapper doc-section'></div>",
  "componentProperties": {
    "fixed-background": {
      "label": "Fixed Background",
      "type": "option",
      "value": "peephole"
    },
    "caption-inside": {
      "label": "Inside Caption",
      "type": "option",
      "value": "inside-caption"
    },
    "caption-fade": {
      "label": "Inside Caption",
      "type": "option",
      "value": "caption-inside-fade"
    },
    "small-size": {
      "label": "Small size",
      "type": "option",
      "value": "small"
    },
    "position": {
      "label": "Position",
      "type": "select",
      "options": [
        {
          "caption": "Middle"
        },
        {
          "caption": "Left",
          "value": "left"
        },
        {
          "caption": "Right",
          "value": "right"
        }
      ]
    },
    "options": {
      "id": "Options",
      "label": "Options",
      "type": "select",
      "options": [
        {
          "caption": "Default"
        },
        {
          "caption": "Stripe",
          "value": "half-height"
        }
      ]
    },
    "featured": {
      "label": "Featured",
      "type": "option",
      "value": "bleed"
    },
    "unordered": {
      "label": "Unordered",
      "type": "option",
      "value": "bullet"
    },
    "dropcap": {
      "label": "Drop Capital",
      "type": "option",
      "value": "drop-cap"
    },
    "large": {
      "label": "Large",
      "type": "option",
      "value": "large"
    },
    "event-style": {
      "label": "Style",
      "type": "select",
      "options": [
        {
          "caption": "Default"
        },
        {
          "caption": "Bullets",
          "value": "bullets"
        }
      ]
    }
  },
  "groups": [
    {
      "label": "Headers",
      "components": [
        "head",
        "hero",
        "title"
      ]
    },
    {
      "label": "Text",
      "components": [
        "p",
        "quote",
        "subtitle",
        "separator",
        "list-item",
        "aside"
      ]
    },
    {
      "label": "Images",
      "components": [
        "full-size",
        "grid-of-6",
        "normal",
        "peephole"
      ]
    },
    {
      "label": "Timeline",
      "components": [
        "event"
      ]
    },
    {
      "label": "Embeds",
      "components": [
        "tweet",
        "iframe"
      ]
    }
  ],
  "defaultComponents": {
    "paragraph": "p",
    "image": "normal"
  },
  "imageRatios": {
    "16:9": {
      "label": "16:9",
      "ratio": "16x9"
    },
    "1:1": {
      "label": "1:1",
      "ratio": "1x1"
    },
    "4:3": {
      "label": "4:3",
      "ratio": "4x3"
    },
    "3:4": {
      "label": "3:4",
      "ratio": "3x4"
    }
  },
  "defaultContent": [
    {
      "identifier": "timeline.head"
    },
    {
      "identifier": "timeline.normal",
      "styles": {
        "position": "left",
        "aspect-ratio": "square"
      }
    },
    {
      "identifier": "timeline.p"
    }
  ],
  "prefilledComponents": {},
  "metadata": [
    {
      "identifier": "title",
      "type": "text",
      "matches": [
        "hero.title",
        "title.title",
        "head.title"
      ]
    },
    {
      "identifier": "description",
      "type": "text",
      "matches": [
        "p.text"
      ]
    }
  ],
  "components": [
    {
      "name": "free-html",
      "html": "<div class=\"embed-container\">\n  <div doc-html=\"free-html\">\n    <div class=\"embed free-html\">\n      <div class=\"placeholder\"></div>\n    </div>\n  </div>\n</div>",
      "label": "Free HTML"
    },
    {
      "name": "iframe",
      "html": "<div class=\"embed-container\">\n  <div doc-html=\"iframe\">\n    <div class=\"embed iframe\">\n      <div class=\"placeholder\"></div>\n    </div>\n  </div>\n</div>",
      "label": "Iframe",
      "properties": [
        "position"
      ]
    },
    {
      "name": "tweet",
      "html": "<div class=\"embed-container\">\n  <div doc-html=\"tweet\">\n    <div class=\"embed tweet\">\n      <div class=\"placeholder\"></div>\n    </div>\n  </div>\n</div>",
      "label": "Tweet",
      "properties": [
        "position"
      ]
    },
    {
      "name": "head",
      "html": "<div class=\"head\">\n  <h1 doc-editable=\"title\">\n    Title\n  </h1>\n  <p class=\"lead\" doc-editable=\"text\">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n  </p>\n</div>",
      "label": "Title and Lead"
    },
    {
      "name": "hero",
      "html": "<div class=\"hero\">\n  <figure>\n    <div class=\"container image-container\" doc-image=\"image\">\n      <div class=\"base-layout middle-text full-height\">\n        <figcaption class=\"inverted centered\">\n          <h1 doc-editable=\"title\">\n            Title\n          </h1>\n          <h2 doc-editable=\"subtitle\">\n            Explain in more detail what this article is all about\n          </h2>\n          <p doc-editable=\"text\">\n            Author, city, date or source\n          </p>\n        </figcaption>\n      </div>\n    </div>\n  </figure>\n</div>",
      "label": "Large Image",
      "properties": [
        "fixed-background"
      ]
    },
    {
      "name": "title",
      "html": "<h2 class=\"title\" doc-editable=\"title\">\n  Title\n</h2>",
      "label": "Simple Title"
    },
    {
      "name": "full-size",
      "html": "<div class=\"full-size\">\n  <figure>\n    <div class=\"container image-container\" doc-image=\"image\">\n      <div class=\"base-layout middle-text full-height\">\n        <figcaption class=\"inverted centered\">\n          <h2 doc-editable=\"title\">\n            Image Title\n          </h2>\n          <h4 doc-editable=\"subtitle\" doc-optional=\"true\">\n            Add an image description\n          </h4>\n        </figcaption>\n      </div>\n    </div>\n  </figure>\n</div>",
      "label": "Full-Size Image"
    },
    {
      "name": "grid-of-6",
      "html": "<div class=\"grid-of-6 clearfix\">\n  <figure class=\"aspect-ratio square\">\n    <div class=\"figure-container\" doc-image=\"image1\"></div>\n    <figcaption doc-editable=\"caption1\" doc-optional=\"true\">Caption</figcaption>\n  </figure>\n  <figure class=\"aspect-ratio square\">\n    <div class=\"figure-container\" doc-image=\"image2\"></div>\n    <figcaption doc-editable=\"caption2\" doc-optional=\"true\">Caption</figcaption>\n  </figure>\n  <figure class=\"aspect-ratio square\">\n    <div class=\"figure-container\" doc-image=\"image3\"></div>\n    <figcaption doc-editable=\"caption3\" doc-optional=\"true\">Caption</figcaption>\n  </figure>\n  <figure class=\"aspect-ratio square\">\n    <div class=\"figure-container\" doc-image=\"image4\"></div>\n    <figcaption doc-editable=\"caption4\" doc-optional=\"true\">Caption</figcaption>\n  </figure>\n  <figure class=\"aspect-ratio square\">\n    <div class=\"figure-container\" doc-image=\"image5\"></div>\n    <figcaption doc-editable=\"caption5\" doc-optional=\"true\">Caption</figcaption>\n  </figure>\n  <figure class=\"aspect-ratio square\">\n    <div class=\"figure-container\" doc-image=\"image6\"></div>\n    <figcaption doc-editable=\"caption6\" doc-optional=\"true\">Caption</figcaption>\n  </figure>\n</div>",
      "label": "Six Squares",
      "properties": [
        "caption-inside",
        "small-size"
      ]
    },
    {
      "name": "normal",
      "html": "<figure class=\"aspect-ratio\">\n  <img doc-image=\"image\">\n  <figcaption doc-editable=\"caption\" doc-optional=\"true\">Add image caption</figcaption>\n</figure>",
      "label": "Normal Image",
      "properties": [
        "position",
        "caption-fade"
      ],
      "directives": {
        "image": {
          "imageRatios": [
            "16:9",
            "1:1",
            "4:3",
            "3:4"
          ],
          "allowOriginalRatio": true
        }
      }
    },
    {
      "name": "peephole",
      "html": "<div class=\"peephole\">\n  <figure>\n    <div class=\"container image-container\" doc-image=\"image\"></div>\n  </figure>\n</div>",
      "label": "Peephole",
      "properties": [
        "options"
      ]
    },
    {
      "name": "aside",
      "html": "<aside class=\"sidenote right\">\n  <h4 doc-editable=\"title\">\n    Heading\n  </h4>\n  <p doc-editable=\"text\">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n  </p>\n</aside>",
      "label": "Aside",
      "properties": [
        "featured"
      ]
    },
    {
      "name": "list-item",
      "html": "<p class=\"list-item\" doc-editable=\"text\">\n  An item\n</p>",
      "label": "List Item",
      "properties": [
        "unordered"
      ]
    },
    {
      "name": "p",
      "html": "<p doc-editable=\"text\">\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>",
      "label": "Paragraph",
      "properties": [
        "dropcap"
      ]
    },
    {
      "name": "quote",
      "html": "<blockquote>\n  <p>\n    <span class=\"quotation-mark\">&#x201C;</span><span class=\"quote\" doc-editable=\"text\">I&#x2019;d rather have a Snowfall builder than a Snowfall.</span>\n  </p>\n  <footer doc-editable=\"author\">\n    Kevin Delaney\n  </footer>\n</blockquote>",
      "label": "Quote",
      "properties": [
        "large"
      ]
    },
    {
      "name": "separator",
      "html": "<hr class=\"separator\">",
      "label": "Separator"
    },
    {
      "name": "subtitle",
      "html": "<h4 doc-editable=\"title\">\n  Subtitle\n</h4>",
      "label": "Subtitle"
    },
    {
      "name": "event",
      "html": "<div class=\"event\">\n  <aside class=\"time\">\n    <time doc-editable=\"time\">Time</time>\n    <p doc-editable=\"keyword\" doc-optional=\"true\">\n      Keyword\n    </p>\n  </aside>\n  <main>\n    <p doc-editable=\"text\">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </p>\n  </main>\n</div>",
      "label": "Event",
      "properties": [
        "event-style"
      ]
    }
  ]
}; if(typeof module !== 'undefined' && module.exports) {return module.exports = designJSON;} else { this.design = this.design || {}; this.design.timeline = designJSON;} }).call(this);