---
layout:            post
title:             "Theme Installation and Usage"
date:              2016-06-08 18:25:00 +0300
tags:              Jekyll Theme GitHub Installation 
category:          Readme
author:            jwillmer
---
This is a blog template for a static site generator named [Jekyll](https://jekyllrb.com/docs/home/) based on a [Ghost](https://ghost.org) template named [Decent](https://github.com/serenader2014/decent). 
If you like to see the theme in production have a look at [jwillmer.de](http://jwillmer.de).


## Screenshots

<div class="album">

<figure>
<img src="{{ site.github.url }}/media/img/2016-06-08-Readme-front-page-previewe.jpg" />
<figcaption>Frontpage</figcaption>
</figure>

<figure>
<img src="{{ site.github.url }}/media/img/2016-06-08-Readme-post-preview.jpg" />
<figcaption>Post</figcaption>
</figure>

<figure>
<img src="{{ site.github.url }}/media/img/2016-06-08-Readme-content-preview.jpg" />
<figcaption>Demo</figcaption>
</figure>

<figure>
<img src="{{ site.github.url }}/media/img/2016-06-08-Readme-about-preview.jpg" />
<figcaption>About Page</figcaption>
</figure>

</div>


## Installation

- To generate/host the blog you need to [install Jekyll](https://jekyllrb.com/docs/installation/). 
- For the plugins (github-pages) you need to install [Bundler](http://bundler.io/): `gem install bundler`
   - Open a command prompt and install the plugins (github-pages): `bundle install`
   - On Windows you will propably get an exception. To solve it you can read [How to install Jekyll and pages-gem on Windows (x64)](http://jwillmer.de/blog/tutorial/how-to-install-jekyll-and-pages-gem-on-windows-10-x46) or you remove the plugins by deleting the `Gemfile` and delete all `gems:` from the `_config.yml` 

### Build

- To build the static site you can use the generated site folder that Jekyll creates when you use `jekyll serve` or you can build it explicitly with `jekyll build`.
- If you like to use GitHub to host your blog you can fork this project and publish the code to `gh-pages`. GitHub has jekyll included and will generate the site for you.


## User Content

Blogposts can be written in [Markdown](https://de.wikipedia.org/wiki/Markdown). 

- The folder for blog content is `_posts`
- For author details you need to modify `_data/authors.yml`
- For site properties (like the name) you need to modify `_config.yml` and `robots.txt`
- For the about page you need to modify the `about.md` in `_pages`

After modifying `*.yml` files you need to restart jekyll to take effect.

### YAML Features

Following (additional) features are supported in the header ([YAML Front Matter](https://jekyllrb.com/docs/frontmatter/)) of each post. A detailed description can be found in the [YAML Custom Features post]({{ site.github.url }}/blog/features/YAML-Features).

```bash
---
title:         Example      #Page/post title
author:        jwillmer     #Page/post author
cover:         /image.jpg   #Optional: Posibillity to change cover on a post/page
redirect_from: /foo         #Optional: Redirect url
visible:       false        #Optional: Hide page from listing in the menu.
weight:        5            #Optional: Influence sorting of pages in the menu
menutitle:     Offline      #Optional: Use a secondary name in the menu/post list
tags:          hallo welt   #Optional: Will be displayed as tags and as keywords in posts
keywords:      hallo welt   #Optional: Will add keywords to a page
language:      en           #Optional: Will set a specific language of the page
---
```

## License

The theme is released under **[The MIT License (MIT)](https://github.com/jwillmer/jekyllDecent/blob/gh-pages/LICENSE)**.

    The MIT License (MIT)

    Copyright (c) 2016 Jens Willmer

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.    
