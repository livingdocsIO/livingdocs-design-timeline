(function () { var designJSON = {"name":"timeline","label":"Timeline","version":"0.4.4","license":"Copyright (c) 2014 upfront GmbH, all rights reserved","assets":{"css":["./stylesheets/timeline.css"]},"wrapper":"<div class='funky-wrapper doc-section'></div>","componentProperties":{"fixed-background":{"label":"Fixed Background","type":"option","value":"peephole"},"caption-inside":{"label":"Inside Caption","type":"option","value":"inside-caption"},"caption-fade":{"label":"Inside Caption","type":"option","value":"caption-inside-fade"},"small-size":{"label":"Small size","type":"option","value":"small"},"position":{"label":"Position","type":"select","options":[{"caption":"Middle"},{"caption":"Left","value":"left"},{"caption":"Right","value":"right"}]},"hide-image":{"label":"Text only","type":"option","value":"hide-image"},"options":{"id":"Options","label":"Options","type":"select","options":[{"caption":"Default"},{"caption":"Stripe","value":"half-height"}]},"featured":{"label":"Featured","type":"option","value":"bleed"},"unordered":{"label":"Unordered","type":"option","value":"bullet"},"dropcap":{"label":"Drop Capital","type":"option","value":"drop-cap"},"large":{"label":"Large","type":"option","value":"large"},"event-style":{"label":"Style","type":"select","options":[{"caption":"Default"},{"caption":"Bullets","value":"bullets"}]}},"groups":[{"label":"Collection","components":["teaser"]},{"label":"Headers","components":["head","hero","title"]},{"label":"Text","components":["p","quote","subtitle","separator","list-item","aside"]},{"label":"Images","components":["full-size","grid-of-6","normal","peephole"]},{"label":"Embeds","components":["tweet","iframe","free-html"]},{"label":"Timeline","components":["event"]}],"defaultComponents":{"paragraph":"p","image":"normal"},"imageRatios":{"16:9":{"label":"16:9","ratio":"16x9"},"1:1":{"label":"1:1","ratio":"1x1"},"4:3":{"label":"4:3","ratio":"4x3"},"3:4":{"label":"3:4","ratio":"3x4"}},"defaultContent":[{"identifier":"timeline.head"},{"identifier":"timeline.normal","styles":{"position":"left","aspect-ratio":"square"}},{"identifier":"timeline.p"}],"prefilledComponents":{"hero":{"text":{"value":"author","type":"computed"}}},"componentCards":[{"name":"default-teaser","component":"teaser","wrapper":"<div class='funky-wrapper doc-section'></div>","isDefault":true,"mapping":{"title":{"dataField":"title","type":"string"},"image":{"dataField":"teaserImage","type":"image"},"site":{"dataField":"author","type":"string"}}}],"metadata":[{"identifier":"title","type":"text","matches":["hero.title","title.title","head.title"],"isEditable":true},{"identifier":"description","type":"text","matches":["head.text","p.text"],"isEditable":true},{"identifier":"author","type":"text","matches":["hero.text"],"isEditable":true},{"identifier":"teaserImage","type":"image","matches":["hero.image","normal.image","full-size.image","peephole.image"],"isEditable":true,"imageRatios":["4:3"]}],"components":[{"name":"free-html","html":"<div class=\"embed-container\"><div doc-html=\"free-html\"><div class=\"embed free-html\"><div class=\"placeholder\"></div></div></div></div>","label":"Free HTML"},{"name":"iframe","html":"<div class=\"embed-container\"><div doc-html=\"iframe\"><div class=\"embed iframe\"><div class=\"placeholder\"></div></div></div></div>","label":"Iframe","properties":["position"]},{"name":"teaser","html":"<div class=\"teaser\"><a doc-link=\"link\"><div class=\"teaser__image container image-container\" doc-image=\"image\"><div class=\"image--overlay\"></div></div><div class=\"teaser__text\"><div><h3><span doc-editable=\"headline\">Headline</span> <span class=\"source\" doc-editable=\"site\">Source</span></h3></div><h2 doc-editable=\"title\">Title</h2></div></a></div>","label":"Teaser","properties":["position","hide-image"],"directives":{"link":{"prefill":{"title":{"key":"title","provider":"iframely"},"site":{"key":"site","provider":"iframely"},"headline":{"key":"author","provider":"iframely"},"image":{"key":"image","provider":"iframely"}}},"image":{"imageRatios":["16:9"],"allowOriginalRatio":false}}},{"name":"tweet","html":"<div class=\"embed-container\"><div doc-html=\"tweet\"><div class=\"embed tweet\"><div class=\"placeholder\"></div></div></div></div>","label":"Tweet","properties":["position"]},{"name":"head","html":"<div class=\"head\"><h1 doc-editable=\"title\">Title</h1><p class=\"lead\" doc-editable=\"text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>","label":"Title and Lead"},{"name":"hero","html":"<div class=\"hero\"><figure><div class=\"container image-container\" doc-image=\"image\"><div class=\"base-layout middle-text full-height\"><figcaption class=\"inverted centered\"><h1 doc-editable=\"title\">Title</h1><h2 doc-editable=\"subtitle\">Explain in more detail what this article is all about</h2><p doc-editable=\"text\">Author, city, date or source</p></figcaption></div></div></figure></div>","label":"Large Image","properties":["fixed-background"]},{"name":"title","html":"<h2 class=\"title\" doc-editable=\"title\">Title</h2>","label":"Simple Title"},{"name":"full-size","html":"<div class=\"full-size\"><figure><div class=\"container image-container\" doc-image=\"image\"><div class=\"base-layout middle-text full-height\"><figcaption class=\"inverted centered\"><h2 doc-editable=\"title\">Image Title</h2><h4 doc-editable=\"subtitle\" doc-optional=\"true\">Add an image description</h4></figcaption></div></div></figure></div>","label":"Full-Size Image"},{"name":"grid-of-6","html":"<div class=\"grid-of-6 clearfix\"><figure class=\"aspect-ratio square\"><div class=\"figure-container\" doc-image=\"image1\"></div><figcaption doc-editable=\"caption1\" doc-optional=\"true\">Caption</figcaption></figure><figure class=\"aspect-ratio square\"><div class=\"figure-container\" doc-image=\"image2\"></div><figcaption doc-editable=\"caption2\" doc-optional=\"true\">Caption</figcaption></figure><figure class=\"aspect-ratio square\"><div class=\"figure-container\" doc-image=\"image3\"></div><figcaption doc-editable=\"caption3\" doc-optional=\"true\">Caption</figcaption></figure><figure class=\"aspect-ratio square\"><div class=\"figure-container\" doc-image=\"image4\"></div><figcaption doc-editable=\"caption4\" doc-optional=\"true\">Caption</figcaption></figure><figure class=\"aspect-ratio square\"><div class=\"figure-container\" doc-image=\"image5\"></div><figcaption doc-editable=\"caption5\" doc-optional=\"true\">Caption</figcaption></figure><figure class=\"aspect-ratio square\"><div class=\"figure-container\" doc-image=\"image6\"></div><figcaption doc-editable=\"caption6\" doc-optional=\"true\">Caption</figcaption></figure></div>","label":"Six Squares","properties":["caption-inside","small-size"]},{"name":"peephole","html":"<div class=\"peephole\"><figure><div class=\"container image-container\" doc-image=\"image\"></div></figure></div>","label":"Peephole","properties":["options"]},{"name":"aside","html":"<aside class=\"sidenote right\"><h4 doc-editable=\"title\">Heading</h4><p doc-editable=\"text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></aside>","label":"Aside","properties":["featured"]},{"name":"p","html":"<p doc-editable=\"text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","label":"Paragraph","properties":["dropcap"]},{"name":"list-item","html":"<p class=\"list-item\" doc-editable=\"text\">An item</p>","label":"List Item","properties":["unordered"]},{"name":"quote","html":"<blockquote><p><span class=\"quotation-mark\">&#x201C;</span><span class=\"quote\" doc-editable=\"text\">I&#x2019;d rather have a Snowfall builder than a Snowfall.</span></p><footer doc-editable=\"author\">Kevin Delaney</footer></blockquote>","label":"Quote","properties":["large"]},{"name":"normal","html":"<figure class=\"aspect-ratio\"><img doc-image=\"image\"><figcaption doc-editable=\"caption\" doc-optional=\"true\">Add image caption</figcaption></figure>","label":"Normal Image","properties":["position","caption-fade"],"directives":{"image":{"imageRatios":["16:9","1:1","4:3","3:4"],"allowOriginalRatio":true}}},{"name":"subtitle","html":"<h4 doc-editable=\"title\">Subtitle</h4>","label":"Subtitle"},{"name":"event","html":"<div class=\"event\"><aside class=\"time\"><time doc-editable=\"time\">Time</time><p doc-editable=\"keyword\" doc-optional=\"true\">Keyword</p></aside><main><p doc-editable=\"text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></main></div>","label":"Event","properties":["event-style"]},{"name":"separator","html":"<hr class=\"separator\">","label":"Separator"}]}; if(typeof module !== 'undefined' && module.exports) {return module.exports = designJSON;} else { this.design = this.design || {}; this.design.timeline = designJSON;} }).call(this);